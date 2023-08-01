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
import MathPage from './pages/MainGPTHub/MathPage';
import SciencePage from './pages/MainGPTHub/SciencePage';
import CodingPage from './pages/MainGPTHub/CodingPage';
import ArtPage from './pages/MainGPTHub/ArtPage';
import AllChatsPage from './pages/MainGPTHub/AllChatsPage';
import HistoryPage from './pages/MainGPTHub/HistoryPage';
import MusicPage from './pages/MainGPTHub/MusicPage';
import SpaceTravelPage from './pages/MainGPTHub/SpaceTravelPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />                  
        <Route path="/gpt-hub" element={<MainGPTHub />} />

        <Route path="/gpt-hub/math" element={<MathPage />} />
        <Route path="/gpt-hub/science" element={<SciencePage />} />
        <Route path="/gpt-hub/coding" element={<CodingPage />} />
        <Route path="/gpt-hub/art" element={<ArtPage />} />
        <Route path="/gpt-hub/all-chats" element={<AllChatsPage />} />
        <Route path="/gpt-hub/history" element={<HistoryPage />} />
        <Route path="/gpt-hub/music" element={<MusicPage />} />
        <Route path="/gpt-hub/space-travel" element={<SpaceTravelPage />} />
        
            
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
