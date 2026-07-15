"use client";

import React from 'react';
import { Accordion } from "@heroui/react";
import { BiChevronDown, BiHelpCircle } from 'react-icons/bi';

interface Faq {
    answer: string;
    question: string;
}

export default function FAQSection() {
    const faqData: Faq[] = [
        {
            question: "How does the Education Support Program select students?",
            answer: "We partner with local schools and community leaders to identify highly talented, brilliant students who are facing acute economic hardships and are at immediate risk of dropping out."
        },
        {
            question: "What areas are covered under the Health & Nutrition campaigns?",
            answer: "Our campaigns actively focus on providing baseline community education regarding clean water accessibility, proper sanitation (WASH principles), maternal hygiene, and balanced nutritional intake for growing children."
        },
        {
            question: "How do you build resilience against environmental hazards?",
            answer: "Through the Disaster Risk & Climate Adaptation program, we conduct community-driven emergency simulation drills, build local early-warning networks, and introduce climate-resilient structural adaptations."
        },
        {
            question: "Who can access the Human Rights & Protection services?",
            answer: "Services are completely free and prioritized for marginalized individuals, domestic abuse survivors, and destitute women who require urgent social security interventions or legal empowerment."
        },
        {
            question: "What constitutes an 'Innovation Program' project?",
            answer: "We support creative, forward-thinking, and highly efficient grassroots systems—such as localized renewable energy modules or eco-friendly trash management setups—that foster long-term sustainable development."
        },
        {
            question: "How can I get involved with the Youth & Women Empowerment initiatives?",
            answer: "You can support us by volunteering as a career mentor, conducting leadership workshops, or donating directly to our vocational training asset funds that help individuals rebuild their lives with confidence."
        }
    ];

    // Styled system selectors passed directly down to the Accordion controller


    return (
        <section id='faq' className="bg-white dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Header Block */}
                <div className="text-center mb-12">
                    <div className="flex justify-center text-blue-600 dark:text-blue-400 text-3xl mb-3">
                        <BiHelpCircle />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                        Find answers to common questions regarding DOHPS core operational programs, community outreach, and project implementation strategies.
                    </p>
                </div>

                {/* HeroUI Accordion Element */}
                <div className="bg-slate-50/50 dark:bg-slate-900/20 p-4 sm:p-6 rounded-2xl border border-slate-100/80 dark:border-slate-800/60 transition-all">
                    <Accordion hideSeparator className="w-full max-w-7xl">
                        {faqData.map((item: Faq, index) => (
                            <Accordion.Item key={index}>
                                <Accordion.Heading>
                                    <Accordion.Trigger
                                        className={'text-xl text-gray-600 dark:text-gray-200'}
                                    >
                                        {item.question}
                                        <Accordion.Indicator>
                                            <BiChevronDown size={25} />
                                        </Accordion.Indicator>
                                    </Accordion.Trigger>
                                </Accordion.Heading>
                                <Accordion.Panel>
                                    <Accordion.Body className='text-lg'>{item.answer}</Accordion.Body>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
}