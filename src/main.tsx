import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import { ThemeProvider } from "./components/theme-provider.tsx"
import { Toaster } from "./components/ui/sonner.tsx"

import RootLayout from "./pages/layout" // 전역 레이아웃 컴포넌트
import App from "./pages" // 메인 페이지
import SignUp from "./pages/sign-up/index" // 회원가입 페이지
import SignIn from "./pages/sign-in/index" // 로그인 페이지
import CreateTopic from "./pages/topics/create.tsx" // 토픽 생성 페이지

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout></RootLayout>}>
            <Route index element={<App />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="topics/create" element={<CreateTopic />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center"></Toaster>
    </ThemeProvider>
  </StrictMode>
)
