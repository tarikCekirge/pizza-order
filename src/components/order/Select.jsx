import React from "react";
import SelectBox from "../../UI/SelectBox";

const Select = () => {
    const options = [
        { label: "İnce", value: "ince" },
        { label: "Orta", value: "orta" },
        { label: "Kalın", value: "kalin" },
    ];

    return (
        <div>
            <h2 className="text-xl font-barlow font-semibold mb-6">
                Hamur Seç<span className="text-red-600 font-bold">*</span>
            </h2>
            <SelectBox options={options} />
        </div>
    );
};

export default Select;
