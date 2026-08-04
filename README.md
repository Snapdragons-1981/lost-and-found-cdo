# Lost & Found CDO

**Helping Cagayan de Oro reunite people with what matters.**

A community platform for reporting lost and found items in Cagayan de Oro, Philippines.

## Features

- 📱 **Mobile-first responsive design** - Works on all devices
- 🔍 **Powerful search** - Find items by category, location, date, and more
- 🗺️ **Interactive map** - View reports on a map
- 💬 **In-app messaging** - Contact finders/owners safely
- 🔔 **Real-time notifications** - Get alerts for matches
- 🌐 **Multi-language** - English, Cebuano, and Filipino
- 🤖 **AI-powered matching** - Automatic lost/found item matching
- 🔒 **Privacy-protected** - Your info stays hidden until you agree to share

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk
- **Maps:** Google Maps API
- **Storage:** Cloudinary
- **Deployment:** Vercel, Railway/Render

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Clerk account
- Google Maps API key
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lost-and-found-cdo.git
cd lost-and-found-cdo
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment template:
```bash
cp .env.example .env
```

4. Fill in your environment variables in `.env`

5. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lost-and-found-cdo/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                   # Next.js app router
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (dashboard)/       # User dashboard
│   │   ├── (main)/            # Main pages
│   │   ├── (admin)/           # Admin panel
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   │   ├── ui/                # Shadcn UI components
│   │   ├── layout/            # Layout components
│   │   └── ...
│   ├── lib/                   # Utilities and configurations
│   ├── types/                 # TypeScript types
│   ├── constants/             # Constants and configurations
│   └── validators/            # Form validation schemas
├── .env.example               # Environment template
└── package.json
```

## Key Features

### For Users
- Report lost items with photos and details
- Report found items to help others
- Search through all reports
- View reports on an interactive map
- Message finders/owners safely
- Track your reports in dashboard

### For Admins
- Manage all reports
- Review flagged content
- View analytics and statistics
- Manage users
- Export data

## Design Principles

- **Simple** - Understandable within 5 seconds
- **Accessible** - WCAG AA compliant
- **Touch-friendly** - Large buttons and touch targets
- **High contrast** - Easy to read for everyone
- **Mobile-first** - Works great on phones

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@lostfoundcdo.ph or create an issue on GitHub.

---

Made with ❤️ for Cagayan de Oro
