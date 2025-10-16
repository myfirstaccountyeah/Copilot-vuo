# Plumber CRM

Plumber CRM is a single-user Customer Relationship Management (CRM) application designed specifically for Australian plumbing businesses. This project is built using Vue 3 with TypeScript and utilizes the Composition API for a modern development experience.

## Features

- **User Authentication**: Secure login and logout functionality.
- **Customer Management**: Add, update, and view customer details.
- **Job Tracking**: Manage jobs with details and statuses.
- **Invoice Management**: Create and manage invoices for services rendered.
- **Dashboard**: Overview of key metrics and data visualizations.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.

## Project Structure

```
plumber-crm
├── public
│   └── index.html
├── src
│   ├── main.ts
│   ├── App.vue
│   ├── shims-vue.d.ts
│   ├── router
│   │   └── index.ts
│   ├── store
│   │   ├── index.ts
│   │   └── modules
│   │       ├── auth.ts
│   │       ├── customers.ts
│   │       ├── jobs.ts
│   │       └── invoices.ts
│   ├── components
│   │   ├── ui
│   │   │   ├── Button.vue
│   │   │   ├── Modal.vue
│   │   │   ├── DataTable.vue
│   │   │   └── FormField.vue
│   │   └── layout
│   │       ├── Header.vue
│   │       ├── Sidebar.vue
│   │       └── Footer.vue
│   ├── layouts
│   │   ├── DefaultLayout.vue
│   │   └── AuthLayout.vue
│   ├── views
│   │   ├── Dashboard.vue
│   │   ├── Login.vue
│   │   ├── Customers.vue
│   │   ├── CustomerDetail.vue
│   │   ├── Jobs.vue
│   │   ├── JobDetail.vue
│   │   ├── Invoices.vue
│   │   └── Settings.vue
│   ├── composables
│   │   ├── useApi.ts
│   │   ├── useAuth.ts
│   │   ├── usePagination.ts
│   │   └── useForm.ts
│   ├── services
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   ├── customers.service.ts
│   │   ├── jobs.service.ts
│   │   └── invoices.service.ts
│   ├── plugins
│   │   ├── axios.ts
│   │   ├── dayjs.ts
│   │   └── vee-validate.ts
│   ├── types
│   │   ├── index.ts
│   │   ├── customer.ts
│   │   ├── job.ts
│   │   ├── invoice.ts
│   │   └── user.ts
│   ├── utils
│   │   ├── validators.ts
│   │   └── formatters.ts
│   ├── locales
│   │   ├── en.json
│   │   └── au.json
│   └── styles
│       ├── tailwind.css
│       └── main.css
├── tests
│   ├── unit
│   │   ├── components
│   │   │   └── Button.spec.ts
│   │   └── views
│   │       └── Dashboard.spec.ts
│   └── e2e
│       └── plumber-crm.spec.ts
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd plumber-crm
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## API Integration

This project includes placeholder API calls for all data interactions. You can replace these with actual API endpoints as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.