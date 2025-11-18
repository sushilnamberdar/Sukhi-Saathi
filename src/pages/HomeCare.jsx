import React from "react";
import homecareImg from "../assets/services/homecare.png";
import { Link } from "react-router-dom";

export default function HomeCare() {
    return (
        <section className="py-16 bg-white">
             <div className="relative w-full h-60 sm:h-64 md:h-80 lg:h-[620px] xl:h-[1600px] rounded-xl overflow-hidden mb-12">
                <img
                    src={homecareImg}
                    alt="Home Care"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg">
                    <h1 className="text-2xl md:text-3xl font-semibold">Home Care Services</h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 space-y-16">

                {/* HERO */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800">Home Care Services</h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Compassionate, reliable support delivered in the comfort of your own home — helping you live safely and independently.
                    </p>
                </div>

                {/* WHAT IS HOME CARE */}
                <div className="bg-gray-50 p-8 rounded-xl border">
                    <h2 className="text-2xl font-semibold">What is Home Care?</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Home care provides personalised support with daily tasks. Whether you need occasional visits or full daily help,
                        our trained carers support independence, safety, and wellbeing.
                    </p>
                </div>

                {/* KEY FEATURES */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Support with washing, dressing & personal care",
                        "Meal preparation & nutrition support",
                        "Medication reminders & monitoring",
                        "Mobility assistance & fall prevention",
                        "Household tasks & light cleaning",
                        "Companionship & emotional support"
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>

                {/* WHO IS IT FOR */}
                <div className="p-8 bg-white rounded-xl border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Who is Home Care For?</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Older adults who want to stay at home</li>
                        <li>• People recovering from hospital stays</li>
                        <li>• Individuals needing support with mobility</li>
                        <li>• Anyone seeking help with personal or daily tasks</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link to="/contact"
                        className="px-8 py-4 bg-[#009EE3] text-white font-semibold rounded-lg hover:bg-[#007bb8] shadow">
                        Arrange Home Care Today
                    </Link>
                </div>

            </div>
        </section>
    );
}
