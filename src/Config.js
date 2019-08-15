import React from 'react';
import './Config.scss';

function Config() {
  return (
    <div>
      <div className="header">
          Build your elixir series
      </div>
        <div className='config'>
        
            <div className='card-container'>
                
                <div className='card'>
                
                    <img src={require('./Images/gamingpc.png')} className='card-img' />
                   
                    <div className='card-title'>
                        Elixir X299
                    </div>
                    <button className="btn">
                        Configure
                    </button>
                </div>
            
        

                <div className='card'>
                
                <img src={require('./Images/gamingpc.png')} className='card-img' />
                <div className='card-title'>
                    Elixir Z390
                </div>
                <button className="btn">
                    Configure
                    </button>
                </div>
            

                <div className='card'>
                    
                <img src={require('./Images/gamingpc.png')} className='card-img' />
                    <div className='card-title'>
                        Elixir X570
                    </div>
                    <button className="btn">
                        Configure
                        </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Config;
