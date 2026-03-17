#!/bin/bash
# Build script: generates config.js from Vercel environment variables
# so the YouTube API key stays out of git but works in production.

if [ -z "$YOUTUBE_API_KEY" ]; then
  echo "Warning: YOUTUBE_API_KEY not set — YouTube features will use hardcoded fallback."
  exit 0
fi

cat > js/config.js << EOF
var CSCONNECT_CONFIG = {
  YOUTUBE_API_KEY: '${YOUTUBE_API_KEY}',
  PODCAST_PLAYLIST_ID: 'PLeDoXr4-Cyfn-YIkvOT3Cw3WjDZ8dlU20',
  SESSIONS_PLAYLIST_ID: 'PLeDoXr4-CyfnSgSh01zZV4M-JCZWmD0o_'
};
EOF

echo "config.js generated successfully."
