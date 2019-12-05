import React from 'react';
import MaterialTable from 'material-table';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

export default function PartnerManagement() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Partner Name', field: 'partnerName' },
            { title: 'Address', field: 'address' },
            { title: 'E-mail', field: 'email' },
            { title: 'Contact', field: 'contact' },
            { title: 'Country', field: 'country'},
            { title: 'Opening Hours', field: 'openHours'},




            // {
            //     title: 'Birth Place',
            //     field: 'birthCity',
            //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            // },
        ],
        data: [
            { partnerName: 'Gulf Exchange', address: 'No.11,Main Street, Jordan', email: 'gulf@gmail.com', contact: '6.12E+08' ,country:'Jordan',openHours:'Sun: 6.30am-8.30am\\n\' + \'Sat: 6.30am-'},
            { partnerName: 'Al-Amani', address: 'No.11,Main Street, Kuwait', email: 'gulf@gmail.com', contact: '6.12E+08' ,country:'Jordan',openHours:'Sun: 6.30am-8.30am\\n\' + \'Sat: 6.30am-'},
            { partnerName: 'Gulf Exchange', address: 'No.11,Main Street, Jordan', email: 'gulf@gmail.com', contact: '6.12E+08' ,country:'Jordan',openHours:'Sun: 6.30am-8.30am\\n\' + \'Sat: 6.30am-'},
            { partnerName: 'Gulf Exchange', address: 'No.11,Main Street, Jordan', email: 'gulf@gmail.com', contact: '6.12E+08' ,country:'Jordan',openHours:'Sun: 6.30am-8.30am\\n\' + \'Sat: 6.30am-'},
            { partnerName: 'Gulf Exchange', address: 'No.11,Main Street, Jordan', email: 'gulf@gmail.com', contact: '6.12E+08' ,country:'Jordan',openHours:'Sun: 6.30am-8.30am\\n\' + \'Sat: 6.30am-'},

        ],
    });

    return (
        <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={state.data}

            editable={{

                onRowAdd: newData =>

                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),

                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
