import { Legend } from "recharts";
import { Tooltip, YAxis } from "recharts";
import { Line, LineChart, XAxis,CartesianGrid} from "recharts";

const data = [
    {name: "25 July", money: 63000},
    {name: "26 July", money: 37000},
    {name: "27 July", money: 58000},
    {name: "28 July", money: 41000},
    {name: "29 July", money: 76000},
    {name: "30 July", money: 19000},
    {name: "31 July", money: 57000},
]


const RechartsExample2 = () => {
    return (
        <div>
           <LineChart width={600} height={260} data={data}>
                <Line type="monotone" dataKey='money' stroke="#FAC032" strokeWidth={3}></Line>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
           </LineChart>
        </div>
    )
}

export default RechartsExample2;
