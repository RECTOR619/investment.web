import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

const MiniBarChartCard = ({ companyId }) => {
    const [state, setState] = useState([]);

    const fetchData = useCallback(async () => {
        await axios
            .get(`https://api.yieldvest.hng.tech/company/${companyId}/interval?startDate=2019-12-31&endDate=2022-12-31`)
            .then((res) => {
                const raw = res.data["financials"];

                raw.forEach((each) => {
                    const newRevenue = each["total_revenue"] / 1e9;
                    const newDate = `${each["date"]}`.substring(0, 4).trim();
                    const newIncome = each["net_income"] / 1e9;
                    const grossProfit = each["gross_profit"] / 1e9;
                    const newExpenses = each["operating_expenses"] / 1e9;
                    const pos = raw.indexOf(each);

                    raw[pos]["total_revenue"] = newRevenue;
                    raw[pos]["date"] = newDate;
                    raw[pos]["net_income"] = newIncome;
                    raw[pos]["gross_profit"] = grossProfit;
                    raw[pos]["operating_expenses"] = newExpenses;
                });

                setState(raw.reverse())
            })
    }, [state]);

    useEffect(() => {
        fetchData()
    }, [fetchData]);


    return (
        <ResponsiveContainer width={"100%"} height={200}>
            <BarChart
                data={state}
                width={"100%"}
                margin={{
                    top: 20,
                    right: 40,
                    left: 40
                }}
                className="text-xs"
            >
                <Bar dataKey="net_income" fill="#000000" />
                <Bar dataKey="gross_profit" fill="#1BD47B" />
                <XAxis dataKey="date" />
            </BarChart>
        </ResponsiveContainer>
    )
};

MiniBarChartCard.propTypes = {
    companyId: PropTypes.string,
};

export default MiniBarChartCard;
