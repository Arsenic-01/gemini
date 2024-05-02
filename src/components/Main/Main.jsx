import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Main = () => {

  const { onSent, recentPrompt, showResult, loading, setPrevPrompts, resultData, setInput, input, setRecentPrompt } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p className="brand-title">Gemini</p>
        <div className="user-pfp">
          <i class="fa-solid fa-user-secret fa-xl"></i>
        </div>
      </div>

      <div className="main-container">

        {!showResult
          ?
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => {
                prompt = "Suggest beautiful places to see on an upcoming road trip"
                onSent(prompt)
                setPrevPrompts(prev => [...prev, prompt])
                setRecentPrompt(prompt)
              }}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => {
                prompt = "Briefly summarize this concept: urban planning"
                onSent(prompt)
                setPrevPrompts(prev => [...prev, prompt])
                setRecentPrompt(prompt)

              }}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => {
                prompt = "Brainstorm team bonding activities for our work retreat"
                onSent(prompt)
                setPrevPrompts(prev => [...prev, prompt])
                setRecentPrompt(prompt)

              }}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => {
                prompt = "Improve the readability of the following code"
                onSent(prompt)
                setPrevPrompts(prev => [...prev, prompt])
                setRecentPrompt(prompt)

              }}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          : <div className="result">
            <div className="result-title">
              <div className="user-pfp">
                <i class="fa-solid fa-user-secret fa-xl"></i>
              </div>
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img src={assets.send_icon} onClick={() => onSent()} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
