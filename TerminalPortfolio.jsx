import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import './styles.css';

const TerminalPortfolio = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        'Welcome to Abdul Nafay’s Portfolio! Type "help" to see the list of commands.'
    ]);

    const commands = {
        help: [
            'Available Commands:',
            'about - Learn about me',
            'projects - Check out my work',
            'experience - My professional journey',
            'skills - My technical toolkit',
            'contact - Get in touch',
            'clear - Clear the terminal'
        ],
        about: [
            "Hey, I'm Abdul Nafay – a passionate Computer Science student from IBA Karachi, blending my technical expertise with real-world logistics experience.",
            "🚀 Technologist at Heart – Built custom software for real-time shipment tracking, automated inventory management, and data analytics.",
            "📈 Logistics Innovator – Focused on efficiency, customer satisfaction, and data-driven decision-making.",
            "🎯 Visionary Leader – Managed teams to deliver scalable tech solutions.",
            "💡 Aspiring Entrepreneur – Co-founder of Scrptble, aiming to revolutionize IT services globally."
        ],
        projects: [
            "Scrptble - Cutting-edge IT solutions for global businesses.",
            "Real-Time Shipment Tracking System - Web-based client monitoring.",
            "Fleet Optimization Tool - Data-driven route optimization."
        ],
        experience: [
            "Allied Logistics Services - Director of IT & Operations (2022 - Present)",
            "Junior Operations Assistant (2018 - 2021)",
            "Technical lead on multiple digital transformation projects."
        ],
        skills: [
            "Programming Languages: Python, JavaScript, SQL",
            "Frameworks: React, Node.js, Pandas",
            "Cloud & DevOps: AWS, CI/CD, Docker",
            "Specialization: Data Analytics, ERP Integration, Process Automation"
        ],
        contact: [
            "LinkedIn: linkedin.com/in/abdulnafay",
            "GitHub: github.com/abdulnafay",
            "Email: a.nafay.26951@khi.iba.edu.pk"
        ],
        clear: []
    };

    const handleCommand = (cmd) => {
        if (cmd === 'clear') {
            setHistory([]);
        } else if (commands[cmd]) {
            setHistory((prev) => [...prev, ...commands[cmd]]);
        } else if (cmd === 'nafay') {
            setHistory((prev) => [...prev, '👑 You found the Easter egg! I am Nafay, the guy behind this portfolio.']);
        } else {
            setHistory((prev) => [...prev, `Unknown command: ${cmd}`]);
        }
        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            setHistory((prev) => [...prev, `> ${input}`]);
            handleCommand(input.trim().toLowerCase());
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-blue-300 flex items-center justify-center">
            <Card className="w-full max-w-3xl p-6 bg-gray-900 text-white rounded-2xl shadow-2xl border border-blue-600">
                <CardContent>
                    <div className="font-mono text-lg">
                        {history.map((line, index) => (
                            <motion.p key={index} initial={{ opacity: 0 }} animate={{ opacity: 1, y: [20, 0] }} transition={{ duration: 0.3 }} className="mb-2">
                                {line}
                            </motion.p>
                        ))}
                        <span className="text-blue-500">$ </span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            autoFocus
                            className="bg-transparent border-none outline-none w-full text-blue-300"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TerminalPortfolio;
