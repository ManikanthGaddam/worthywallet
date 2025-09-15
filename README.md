


# 💰 WorthyWallet — AI-powered Personal Finance Tracker  

WorthyWallet is a full-stack personal budget tracker that helps users manage their expenses, visualize spending patterns, and automate financial insights with **Google Gemini AI**.  

---

## 🚀 Features
- 🔐 **Secure authentication** with Clerk  
- 👥 **Multi-account support**  
- 💸 **Budget tracking** — add, filter, and categorize transactions  
- ♻️ **Recurring transactions** to automate monthly expenses  
- 📧 **Automated financial reports** via email (Inngest)  
- 🧾 **Receipt scanning** using Gemini AI for smart expense classification  
- 📊 **Visual insights** — progress bars & pie charts for better budgeting  

---

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, TailwindCSS, shadcn/ui  
- **Backend**: Prisma, Supabase  
- **Auth**: Clerk  
- **Background Jobs**: Inngest  
- **AI Integration**: Google Gemini  



## ⚙️ Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/your-username/worthywallet.git
cd worthywallet


2️⃣ Install dependencies
npm install
# or
yarn install


3️⃣ Setup environment variables

Copy the example environment file and fill in your own keys:

cp .env.example .env

4️⃣ Setup the database

Run Prisma migrations to sync your database schema:

npx prisma migrate dev

5️⃣ Run the development server
npm run dev
# or
yarn dev

Open http://localhost:3000
 in your browser 🚀



---

