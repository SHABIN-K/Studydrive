# StudyDrive
A full stack web application that makes studying easier for students and document management hassle-free for teachers. Students can easily find study materials sorted by subjects and courses, while teachers can upload, organize, and manage resources effortlessly. StudyHub encourages teamwork, makes study materials easy to access, and acts as a hub for all educational resources 

## Features

- **WhatsApp OTP Delivery**: Send one-time passcodes (OTPs) to users' WhatsApp accounts for secure mobile number verification.
- **Node.js and Express.js Backend**: Utilize the power of Node.js and Express.js to create a robust and scalable server.
- **whatsapp-web.js Integration**: Seamlessly interact with WhatsApp accounts through the WhatsApp Web API.
- **Developer-Friendly APIs**: Integrate user verification functionalities easily into various applications.
- **Real-Time Interaction**: Engage with users in real-time via WhatsApp messages during the verification process.

  
## Tech Stack
- **NEXT.JS:** React-based framework for building modern web applications.

- **Tailwind CSS:** Utility-first CSS framework for highly customizable UIs.

- **MongoDB:** NoSQL database for flexible and scalable data storage.

- **NextAuth:** Authentication solution for Next.js with social logins and more.

- **Prisma:** Modern database toolkit for simplified data access.

- **Zustand:** Lightweight state management library for React.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)
- [Edgestore](https://edgestore.dev/) for managing all the uploaded douments
- [MongoDB](https://www.mongodb.com/) for persisting data.


### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

* `NEXTAUTH_URL `:The public URL of your NextAuth authentication service.
* `NEXTAUTH_URL_INTERNAL` :The internal URL used for authentication within the project.
* `NEXTAUTH_SECRET `:A secret key for securing sessions and tokens in NextAuth.  
* `NEXT_SHARP_PATH`:Path for Next.js image processing with Sharp.
* `NEXT_DEFAULT_PASSWORD`:Default password used during project setup or user creation.
* `NEXT_PUBLIC_APP_URL`:The public URL of your application.
* `DATABASE_URL `:Your MongoDB connection URL.
* `EDGE_STORE_ACCESS_KEY`:Access key for Edge Store,  
* `EDGE_STORE_SECRET_KEY`:Secret key for Edge Store
 
### How To Use
From your command line:

```bash
# Clone this repository
  $git clone https://github.com/SHABIN-K/PASC-HUB.git

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
## Contributing
   We welcome contributions from the community. Please fork the repository and submit pull requests.
   
## Support   
Join Our [Telegram Group](https://www.telegram.dog/codexbotzsupport) For Support/Assistance And Our [Channel](https://www.telegram.dog/codexbotz) For Updates.   
   
Report Bugs, Give Feature Requests There..   

## Licence
[Studydrive](https://github.com/SHABIN-K/PASC-HUB) is Free Software: You can use, study share and improve it at your
will. Specifically you can redistribute and/or modify it under the terms of the
[MIT License](https://opensource.org/license/mit/l) as
published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version. 


##

   **Star this Repo if you Liked it ⭐⭐⭐**
