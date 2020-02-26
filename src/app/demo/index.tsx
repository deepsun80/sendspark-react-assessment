import * as React from 'react';
import './styles.css';
import logo from './images/logo.svg';


const Demo = () => {
  const [text, setText] = React.useState('Unrotated');
  const [displayImg, setDisplayImg] = React.useState(true);
  const [version, setVersion] = React.useState("");

  const [rotation, setRotation] = React.useState({
    degrees: 0,
    times: 0,
  });

  const styles = {
    cursor: "pointer",
    transform: `rotate(${rotation.degrees}deg)`,
    transition: "all 0.5s ease-in-out"
  }

  const handleRotation = () => {
    setText('Rotated');
    setRotation({ degrees: rotation.degrees + 90, times: rotation.times + 1 });
  };

  const getRequest = async () => {
    const response = await fetch("https://api.sendspark.com/", {
      method: "GET",
    });
    const result = await response.json();
    setVersion(result.version);
    setDisplayImg(false);
  }

  return (
    <section className="demo-box">
      <div style={{ flexGrow: 1 }}></div>
      <div className="logo-box">
        {displayImg ? (<img 
          src={logo} 
          alt="sendspark logo" 
          style={styles} 
          className="logo"
          onClick={getRequest}
        />) : (<p style={styles} onClick={() => setDisplayImg(true)}>{version}</p>)}
      </div>
      <div>
        <button className="btn" onClick={handleRotation}>
          Rotate
        </button>
        <p style={{ textAlign: 'center' }}>
          {text} {rotation.degrees > 0 && `${rotation.degrees} degrees`}{' '}
          {rotation.times > 0 && `(${rotation.times} times)`}
        </p>
      </div>
    </section>
  );
};

export default Demo;
