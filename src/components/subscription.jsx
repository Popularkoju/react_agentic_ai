import React from 'react';
// import Subcription from '../data/data';
import subsData from '../data/data';
import { useState } from 'react';
import { SubscriptionItemCard } from './subcriptionCardItem';

function SubcriptionSection() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
            <h1 className="text-[32px] md:text-[44px] font-bold text-white mb-4 text-center tracking-tight">
                Simple, transparent pricing
            </h1>
            <p className="text-lg text-slate-400 mb-10 text-center font-medium">
                No contracts. No surprise fees.
            </p>

            {/* Toggle */}
            <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
            <div className="w-full max-w-[1050px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">

                    {subsData
                        .filter((subs) => subs.isYearly === isYearly)
                        .map((subs) => (
                            <SubscriptionItemCard
                                key={subs.type}
                                title={subs.type}
                                price={subs.price}
                                description={subs.description}
                                features={subs.features}
                                isYearly={isYearly}
                                isPopular={subs.isPopular}
                                buttonText={subs.buttonText}
                            />
                        ))}

                </div></div>
        </div>
    )

}

function PricingToggle({ isYearly, setIsYearly }) {
    return (
        <div className="bg-slate-800 p-1.5 rounded-full inline-flex mb-16 shadow-sm border border-slate-700">
            <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-colors ${!isYearly
                        ? 'text-white bg-indigo-500 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
            >
                MONTHLY
            </button>
            <button
                onClick={() => setIsYearly(true)}
                className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-wider transition-colors ${isYearly
                        ? 'text-white bg-indigo-500 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
            >
                YEARLY
            </button>
        </div>
    );
}
export default SubcriptionSection