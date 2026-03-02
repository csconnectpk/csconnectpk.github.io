# CS Connect Pakistan

Website for [CS Connect Pakistan](https://csconnect.pk), a student-led nonprofit connecting 3,000+ tech students across 60+ universities in Pakistan.

## Tech Stack

Static site. No frameworks, no build step.

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript
- Hosted on [Vercel](https://vercel.com)

## Project Structure

```
├── index.html          # Homepage
├── about.html          # Origin story and team
├── podcasts.html       # Podcast episodes
├── resources.html      # Entry test prep, roadmaps
├── join.html           # Community links and FAQ
├── css/
│   └── style.css       # All styles, dark/light theme
├── js/
│   ├── main.js         # Core interactions
│   ├── waves.js        # Hero wave animation
│   └── youtube.js      # YouTube playlist integration
├── images/             # Team photos and feature images
└── vercel.json         # Deployment config
```

## Running Locally

Open `index.html` in a browser. That's it.

For clean URLs (matching production), use any static file server:

```sh
npx serve .
```

## Contributing

Contributions are welcome. Here's how:

1. Fork the repository
2. Create a branch (`git checkout -b fix/broken-link`)
3. Make your changes
4. Test locally across pages — check images load, links work, and both themes render correctly
5. Commit with a clear message
6. Open a pull request

Please keep changes focused. One fix or feature per PR.

### Guidelines

- No build tools or frameworks. Keep it static.
- Follow existing naming conventions (BEM for CSS, kebab-case for files).
- Test on mobile. Most of the community accesses from phones.
- Don't commit API keys or credentials.

## License

This project does not currently have a license. All rights reserved by CS Connect Pakistan.

## Contact

- Website: [csconnect.pk](https://csconnect.pk)
- Instagram: [@csconnectpk](https://www.instagram.com/csconnectpk)
- YouTube: [@csconnectpk](https://www.youtube.com/@csconnectpk)
- Email: csconnectpakistan@gmail.com
