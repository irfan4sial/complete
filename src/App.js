import Login from './pages/Login';
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import GPTHub from './pages/GPTHub';
import TestLabPage from './pages/TestLabPage';
import TestLabExamplePage from './pages/TestLabExamplePage';
import QuestionResult from './pages/TestLabExamplePage/QuestionResult';
import AIPresentationPage from './pages/PersonalAIGPT/AIPresentationPage';
import ChatPrompt from './pages/ChatPrompt';
import ChatAlgebra from './pages/ChatAlgebra';
import PersonalAIGPT from './pages/PersonalAIGPT';
import AIBlogContentPage from './pages/PersonalAIGPT/AIBlogContentPage';
import AIImagesPage from './pages/PersonalAIGPT/AIImagesPage';
import AICodePage from './pages/PersonalAIGPT/AICodePage';
import MainGPTHub from './pages/MainGPTHub';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />                  
        <Route path="/gpt-hub" element={<MainGPTHub />} />
        
            
        <Route path="/test-lab" element={<TestLabPage />} />  
        <Route path="/test-lab-example" element={<TestLabExamplePage />} />
        <Route path="/questions-result" element={<QuestionResult />} />
        <Route path="/chat-prompt" element={<ChatPrompt />} />
        <Route path="/chat-algebra" element={<ChatAlgebra />} />
        <Route path="/personal-ai" element={<PersonalAIGPT />} />
        <Route path="/personal-ai/blog-content" element={<AIBlogContentPage />} />
        <Route path="/personal-ai/presentation" element={<AIPresentationPage />} />
        <Route path="/personal-ai/code" element={<AICodePage />} />
        <Route path="/personal-ai/images" element={<AIImagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
