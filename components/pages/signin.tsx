"use client";

import { Label } from "@/components/ui/label";
import { TextInput } from "@/components/ui/input/text-input";
import { useState } from "react";


const SignIn: React.FC = () => {
    const [state, setState] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-96">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <TextInput
                    id="name"
                    name="name"
                    placeholder="your Awesome Full Name"
                    required
                    type="name"
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <TextInput
                    id="username"
                    name="username"
                    placeholder="your Frigear Username"
                    required
                    type="username"
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <TextInput
                    id="phone"
                    name="phone"
                    placeholder="your Unique Number"
                    required
                    type="phone"
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="zip_code">Your Zip Code</Label>
                <TextInput
                    id="zip_code"
                    name="zip_code"
                    placeholder="Where Do You Live?"
                    required
                    type="zip_code"
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <TextInput
                    id="email"
                    name="email"
                    placeholder="your.name@example.somewhere"
                    required
                    type="email"
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <button
                disabled={loading}
                className="bg-zinc-900 py-2 text-zinc-100 shadow hover:bg-zinc/90 w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                type="submit"
            >
                Send me a magic Frigear link
            </button>
        </form>
    );
};

export default SignIn;
