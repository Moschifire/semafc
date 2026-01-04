import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    const rates = [
        {
            title: "Procurement (Equipment)",
            description: "Supply of certified fire extinguishers",
            items: [
                { name: "6kg Dry Chemical Powder", price: "₦45,500" },
                { name: "2kg CO2 (Carbon Dioxide)", price: "₦42,000" },
                { name: "5kg CO2 (Carbon Dioxide)", price: "₦78,500" },
                { name: "9L Foam Extinguisher", price: "₦55,000" },
                { name: "Fire Blanket (1.2m x 1.2m)", price: "₦15,000" }
            ],
            color: "border-slate-200"
        },
        {
            title: "Maintenance & Servicing",
            description: "Refilling and pressure testing",
            items: [
                { name: "DCP Refilling (per kg)", price: "₦2,500" },
                { name: "CO2 Refilling (per kg)", price: "₦4,500" },
                { name: "Installation (per unit)", price: "₦5,000" },
                { name: "Annual Safety Audit (Office)", price: "₦50,000+" },
                { name: "Hydrostatic Pressure Test", price: "₦8,500" }
            ],
            color: "border-red-500",
            highlight: true
        },
        {
            title: "Training & Lectures",
            description: "Certified safety workshops",
            items: [
                { name: "Residential Basic Safety", price: "₦75,000" },
                { name: "Corporate Staff (Up to 15)", price: "₦250,000" },
                { name: "Industrial Fire Drill (Full Day)", price: "₦450,000" },
                { name: "Safety Certification Prep", price: "Call for Quote" },
                { name: "Monthly Maintenance Lecture", price: "₦120,000" }
            ],
            color: "border-slate-200"
        }
    ];

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Rate Card</h2>
                    <p className="text-slate-600">Transparent pricing for premium safety solutions. (Prices subject to site assessment)</p>
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {rates.map((card, index) => (
                        <div key={index} className={`border-2 ${card.color} rounded-2xl p-8 flex flex-col transition-transform hover:scale-105 ${card.highlight ? 'shadow-xl' : 'shadow-sm'}`}>
                            <h3 className="text-xl font-extrabold text-slate-900 mb-2">{card.title}</h3>
                            <p className="text-sm text-slate-500 mb-6">{card.description}</p>

                            <div className="flex-grow space-y-4 mb-8">
                                {card.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2">
                                        <span className="text-slate-700 text-sm flex items-center gap-2">
                                            <Check className="w-4 h-4 text-red-600" /> {item.name}
                                        </span>
                                        <span className="font-bold text-slate-900">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-3 rounded-lg font-bold transition ${card.highlight ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                                Order This Service
                            </button>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-400 text-xs mt-10">
                    * Prices are estimates for 2026. Logistics and VAT may apply depending on location.
                </p>
            </div>
        </section>
    );
};

export default Pricing;