import http.server
import socketserver
import os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Support Vercel-style clean URLs: /podcasts -> /podcasts.html
        path = self.path.split('?')[0].split('#')[0]
        if '.' not in os.path.basename(path) and not path.endswith('/'):
            html_path = path + '.html'
            if os.path.isfile(html_path.lstrip('/')):
                self.path = html_path
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

PORT = 3000
with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"Serving on http://localhost:{PORT}")
    httpd.serve_forever()
