import { useState } from 'react';

// Question:
// Build a Mini Traffic Light component using a `light` state.
// Add three buttons: Red, Yellow, and Green.
// When a button is clicked, update `light` and show its value with matching text and background color.

const lights = [
    { name: 'red', on: 'bg-red-500', off: 'bg-red-950' },
    { name: 'yellow', on: 'bg-yellow-400', off: 'bg-yellow-950' },
    { name: 'green', on: 'bg-green-500', off: 'bg-green-950' },
];

function TrafficLight() {
    const [lightColor, setLightColor] = useState('red');

    function changeLight(light) {
        setLightColor(light);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-400 p-6">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Mini Traffic Light
                </h1>

                <div className="flex flex-col gap-4 rounded-2xl bg-neutral-700 p-4">
                    {lights.map(({ name, on, off }) => (
                        <div
                            key={name}
                            className={`h-16 w-16 rounded-full transition-colors ${
                                lightColor === name ? on : off
                            }`}
                        />
                    ))}
                </div>

                <p className="text-lg font-bold capitalize text-gray-800">
                    {lightColor}
                </p>

                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={() => changeLight('red')}
                        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => changeLight('yellow')}
                        className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-zinc-900"
                    >
                        Yellow
                    </button>
                    <button
                        onClick={() => changeLight('green')}
                        className="rounded-lg bg-green-500 px-4 py-2 text-sm font-bold text-white"
                    >
                        Green
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrafficLight;
