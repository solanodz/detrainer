"use client"

import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';


const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function ComboboxDemo() {

    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (inputValue === '' && !isFocused) {
            setSuggestions([]);
        } else {
            setSuggestions(
                frameworks
                    .filter(framework =>
                        framework.label.toLowerCase().includes(inputValue.toLowerCase())
                    )
                    .slice(0, 5) // Limit to 3 suggestions
            );
        }
    }, [inputValue, isFocused]);

    return (
        <div>
            <Input
                type="text"
                value={inputValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 100)} // delay to allow click on suggestion
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type a framework name"
            />
            {isFocused && suggestions.length > 0 && (
                <ul className='my-2 text-sm font-medium flex flex-col gap-1 border border-zinc-300 rounded-lg p-2 shadow-md z-50'>
                    <span className='text-xs font-semibold text-muted-foreground'>Sugestions</span>
                    {suggestions.map((suggestion, index) => (
                        <li className='p-2 hover:bg-zinc-100 duration-200 rounded-md cursor-pointer' key={index} onMouseDown={() => setInputValue(suggestion.label)}>
                            {suggestion.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
