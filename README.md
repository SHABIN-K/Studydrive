# StudyDrive 📚
A full stack web application that makes studying easier for students and document management hassle-free for teachers. **Students can easily find study materials sorted by subjects and courses, while teachers can upload, organize, and manage resources effortlessly**. StudyHub encourages teamwork, makes study materials easy to access, and acts as a hub for all educational resources 🚀

## Features 🌟

- **Lightweight:**: Crafted with minimalistic UI design.
- **PWA:** Install as a Progressive Web App on your device.
- **Easy Navigation:** Students can effortlessly find study materials, sorted by subjects, courses, and categories.
- **Advanced Search:** Powerful search functionality to quickly locate specific study materials.
- **Document Management:** Teachers can easily upload, organize, and manage a variety of educational resources.
- **Admin Dashboard:** Admins can conveniently control and manage users and roles.
- **Security Measures:** Ensuring secure file upload and storage..
- **User Authentication:** Secure login for teachers and admin.
- **Responsive Design:** User-friendly experience on various devices.
  
## Tech Stack 🛠️

- **NEXT.JS:** React-based framework for building modern web applications.
- **Tailwind CSS:** Utility-first CSS framework for highly customizable UIs.
- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **NextAuth:** Authentication solution for Next.js with social logins and more.
- **Prisma:** Modern database toolkit for simplified data access.
- **Zustand:** Lightweight state management library for React.

## Getting Started 🚦

### Prerequisites 🚧

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)
- [Edgestore](https://edgestore.dev/) for managing all the uploaded douments
- [MongoDB](https://www.mongodb.com/) for persisting data.


### Environment Variables ⚙️

To run this project, you will need to add the following environment variables to your .env file:

* `NEXTAUTH_URL `:The public URL of your NextAuth authentication service.
* `NEXTAUTH_URL_INTERNAL` :The internal URL used for authentication within the project.
* `NEXTAUTH_SECRET `:A secret key for securing sessions and tokens in NextAuth.  
* `NEXT_SHARP_PATH`:Path for Next.js image processing with Sharp.
* `NEXT_DEFAULT_PASSWORD`:Default password used during project setup or user creation.
* `NEXT_PUBLIC_APP_URL`:The public URL of your application.
* `DATABASE_URL `:Your MongoDB connection URL.
* `EDGE_STORE_ACCESS_KEY`:Access key for Edge Store,  
* `EDGE_STORE_SECRET_KEY`:Secret key for Edge Store
 
### How To Use 🚀
From your command line:

```bash
# Clone this repository
  $git clone https://github.com/your_github_name/studydrive.git

# Go into the repository
  $cd studydrive

# Install dependencies
  $npm install
  # <Create .env appropriately>

# This is needed if you are planning to run studydrive locally
  $npx prisma db push

# Start the app in development mode with hot-code reloading by running:
  $npm run dev
````
## Contributing 🤝
   We welcome contributions from the community. Please fork the repository and submit pull requests.
   **Make sure to see [contributing.md](https://github.com/SHABIN-K/studydrive/blob/main/CONTRIBUTING.md) for instructions on contributing to the project!**
   
## Support 💬
Join Our [Telegram Group](https://www.telegram.dog/codexbotzsupport) For Support/Assistance And Our [Channel](https://www.telegram.dog/codexbotz) For Updates.   
   
Report Bugs, Give Feature Requests There..   

## Licence 📝
[Studydrive](https://github.com/SHABIN-K/studydrive) is Free Software: You can use, study share and improve it at your
will. Specifically you can redistribute and/or modify it under the terms of the
[MIT License](https://opensource.org/license/mit/l) as
published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version. 


##

  **⭐️ Star this Repo if you Liked it! ⭐️**

