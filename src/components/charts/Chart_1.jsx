import { Legend } from "recharts";
import { Tooltip, YAxis } from "recharts";
import { Line, LineChart, XAxis,CartesianGrid} from "recharts";

const data = [
    {name: "1 July", money: 44000},
    {name: "8 July", money: 78000},
    {name: "16 July", money: 32000},
    {name: "24 July", money: 62000},
    {name: "31 July", money: 42000},
]


const RechartsExample1 = () => {
    return (
        <div>
           <LineChart width={600} height={260} data={data}>
                <Line type="monotone" dataKey='money' stroke="#2196F3" strokeWidth={3}></Line>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
           </LineChart>
        </div>
    )
}

export default RechartsExample1;
