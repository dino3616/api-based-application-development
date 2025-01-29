'use client';

import { useEffect, useState } from 'react';

export const App = () => {
  const [gamepads, setGamepads] = useState<Gamepad[]>([]);

  useEffect(() => {
    const updateGamepads = () => {
      const gamepadList = navigator.getGamepads();
      setGamepads(gamepadList.filter(Boolean) as Gamepad[]);
    };

    window.addEventListener('gamepadconnected', updateGamepads);
    window.addEventListener('gamepaddisconnected', updateGamepads);

    return () => {
      window.removeEventListener('gamepadconnected', updateGamepads);
      window.removeEventListener('gamepaddisconnected', updateGamepads);
    };
  }, []);

  return (
    <div className='min-h-screen p-6 bg-gray-100'>
      <h1 className='mb-4 text-2xl font-bold'>Gamepad Interface</h1>
      {gamepads.length > 0 ? (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {gamepads.map(gamepad => (
            <div key={gamepad.index} className='p-4 bg-white border border-gray-300 rounded-lg shadow-md'>
              <h2 className='mb-2 text-lg font-bold'>Gamepad {gamepad.index}</h2>
              <div className='mb-2'>
                <span className='font-semibold'>ID:</span> {gamepad.id}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Connected:</span> {gamepad.connected ? 'Yes' : 'No'}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Mapping:</span> {gamepad.mapping}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Axes:</span>
                <div className='ml-4'>
                  {gamepad.axes.map((axis, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey:
                    <div key={index} className='text-sm'>
                      Axis {index + 1}: {axis.toFixed(2)}
                    </div>
                  ))}
                </div>
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Buttons:</span>
                <div className='ml-4'>
                  {gamepad.buttons.map((button, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey:
                    <div key={index} className='text-sm'>
                      Button {index + 1}: {button.pressed ? 'Pressed' : 'Released'} ({button.value.toFixed(2)})
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-600'>No gamepads connected.</p>
      )}
    </div>
  );
};
