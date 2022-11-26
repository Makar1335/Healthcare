import './table.scss'
import Edit from '../../components/img/edit.PNG'

function Table1(props) {
    return (
        <div className="table">
            <table cellSpacing="0" cellPadding="0">
                <caption><h1>Appointment Activity</h1></caption>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Visit Time</th>
                        <th>Doctor</th>
                        <th>Conditions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={props.Avatar1} /></td>
                        <td>{props.Name1}</td>
                        <td>{props.Email1}</td>
                        <td>{props.Date1}</td>
                        <td>{props.Visit1}</td>
                        <td>{props.Doctor1}</td>
                        <td>{props.Conditions1}</td>
                        <td><img src={Edit} className="edit-img"/></td>
                    </tr>
                    <tr>
                        <td><img src={props.Avatar2} /></td>
                        <td>{props.Name2}</td>
                        <td>{props.Email2}</td>
                        <td>{props.Date2}</td>
                        <td>{props.Visit2}</td>
                        <td>{props.Doctor2}</td>
                        <td>{props.Conditions2}</td>
                        <td><img src={Edit} className="edit-img"/></td>
                    </tr>
                    <tr>
                        <td><img src={props.Avatar3} /></td>
                        <td>{props.Name3}</td>
                        <td>{props.Email3}</td>
                        <td>{props.Date3}</td>
                        <td>{props.Visit3}</td>
                        <td>{props.Doctor3}</td>
                        <td>{props.Conditions3}</td>
                        <td><img src={Edit} className="edit-img"/></td>
                    </tr>
                    <tr>
                        <td><img src={props.Avatar4} /></td>
                        <td>{props.Name4}</td>
                        <td>{props.Email4}</td>
                        <td>{props.Date4}</td>
                        <td>{props.Visit4}</td>
                        <td>{props.Doctor4}</td>
                        <td>{props.Conditions4}</td>
                        <td><img src={Edit} className="edit-img" /></td>
                    </tr>
                    <tr>
                        <td><img src={props.Avatar5} /></td>
                        <td>{props.Name5}</td>
                        <td>{props.Email5}</td>
                        <td>{props.Date5}</td>
                        <td>{props.Visit5}</td>
                        <td>{props.Doctor5}</td>
                        <td>{props.Conditions5}</td>
                        <td><img src={Edit} className="edit-img"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table1;