import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6;
  const hours = (time.getHours() % 12) * 30 + minutes / 12;

  const apps = [
    {icon:"/icons/smartstore.png", name:"스토어", url:"https://smartstore.naver.com/lutoz"},
    {icon:"/icons/instagram.png", name:"인스타그램", url:"https://instagram.com/2so.01"},
    {icon:"/icons/youtube.png", name:"유튜브", url:"https://youtube.com/@Li2CO3"},
    {icon:"/icons/blog.png", name:"블로그", url:"https://blog.naver.com/7li___924"},
    {icon:"/icons/siru.png", name:"다꾸시루", url:"https://sticker-memo.vercel.app/"},
    {icon:'/icons/velog.png', name:"벨로그", url:"https://velog.io/@mintsky0172/posts"},
    {icon:"/icons/github.png", name:"깃허브", url:"https://github.com/mintsky0172"},
  ];

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  const getNumberStyle = (num) => {
    const angle = (num * 30 - 90) * (Math.PI / 180); 
    const radius = 34; 
    const x = 40 + radius * Math.cos(angle); 
    const y = 40 + radius * Math.sin(angle);

    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  };

  const dockApps = [
    { icon: '/icons/phone.png', url: '#' },
    { icon: '/icons/safari.png', url: '#' },
    { icon: '/icons/music.png',  url: '#' },
    { icon: '/icons/camera.png', url: '#' },
  ];

  return (
    <div className="home-screen">
      <div class="notch"></div>
      <div className="widget-group">
      <div className="clock-widget">
        <div className="clock">
          {numbers.map((num) => (
            <span
              key={num}
              className="clock-number"
              style={getNumberStyle(num)}
            >
              {num}
            </span>
          ))}

          <div className="hand hour" style={{ transform: `rotate(${hours}deg)` }}></div>
          <div className="hand minute" style={{ transform: `rotate(${minutes}deg)` }}></div>
          <div className="hand second" style={{ transform: `rotate(${seconds}deg)` }}></div>
          <div className="clock-center"></div>
        </div>
      </div>
      <div class="mini-widget">🔋 82%</div>
      </div>
      <div className="icon-grid">
        {apps.map((app) => (
          <a href={app.url} key={app.name} className="icon-wrapper">
            <img className="app-icon" src={app.icon} alt={app.name} />
            <span className="app-name">{app.name}</span>
          </a>
        ))}
      </div>

      <div className="search">
        <a className="search-wrapper">
        <h7>🔍검색</h7>
        </a>
      </div>

      <div className="dock-bar">
        {dockApps.map((app) => (
          <a href={app.url} key={app.name} className="dock-icon-wrapper">
            <img className="dock-icon" src={app.icon} />
            <span className="dock-name">{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
