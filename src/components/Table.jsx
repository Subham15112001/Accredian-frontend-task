import { useEffect, useRef, useState } from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
const TABLE_HEAD = ["Day", "Job", "Employed", "Actions"];
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const INITIAL_ROWS = [
    {
        day: "John Michael",
        class: "Manager",
        start: "23/04/",
        end: ""
    },
    {
        day: "John ",
        class: "Manager",
        start: "25/04/",
        end: ""
    },
    {
        day: "Jo Michael",
        class: "Manager",
        start: "26/04/18",
        end: ""
    },
    {
        day: "John chael",
        class: "Manager",
        start: "27/04/18",
        end: ""
    },
    {
        day: "John Mic",
        class: "Manager",
        start: "28/04/18",
        end: ""
    },
];

function Table({ Day = "Monday" }) {

    const TABLE_HEAD = [`Teacher`, "Class", "Start Time(hr/min)", "End Time(hr/min)"];

    const [rows, setRows] = useState(INITIAL_ROWS);
    const [editRowName, setEditRowName] = useState(null);
    const [formData, setFormData] = useState({
        day: "",
        class: "",
        start: "",
        end: "",
    });

    useEffect(() => {
        if (editRowName) {

        }
    }, [editRowName])

    const handleEdit = (row) => {
        setEditRowName(row.day);
        setFormData({ ...row });
    };

    const handleCancel = () => {
        setEditRowName(null);
        setFormData({ day: "", class: "", start: "", end: "" });
    };

    const handleSave = () => {
        setRows(
            rows.map((row) =>
                row.day === editRowName ? { ...formData } : row
            )
        );
        handleCancel();
    };

    const handleDelete = (index) => {

        setRows((value) => {
            let temp = value.filter((value, i) => {
                if (i !== index) {
                    return true;
                }
                return false;
            })


            return temp;
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAdd = () => {
        const tm = {
            day: "John ",
            class: "Manager",
            start: "28/04/18",
            end: ""
        }
        setRows([...rows, tm])
    }

    return (
        <Card className="h-full w-full  flex bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">


                <h1 className="flex-auto justify-center self-center text-3xl font-bold ">
                    {Day}
                </h1>


            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-r-black bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue"
                                    className="font-bold leading-none opacity-70 "
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        const isLast = index === rows.length - 1;
                        const classes = isLast
                            ? "p-4 border-2 border-black"
                            : "p-4 border-2 border-black";
                        const isEditing = editRowName === row.day;

                        return (
                            <tr key={index}>
                                <td className={classes}>
                                    {isEditing ? (
                                        <Input
                                            name="name"
                                            value={formData.day}
                                            onChange={handleChange}
                                            size="md"
                                        />
                                    ) : (
                                        <Typography
                                            variant="small"
                                            color="blue"
                                            className="font-normal"
                                        >
                                            {row.day}
                                        </Typography>
                                    )}
                                </td>
                                <td className={classes}>
                                    {isEditing ? (
                                        <Input
                                            name="class"
                                            value={formData.class}
                                            onChange={handleChange}
                                            size="md"
                                        />
                                    ) : (
                                        <Typography
                                            variant="small"
                                            color="blue"
                                            className="font-normal"
                                        >
                                            {row.class}
                                        </Typography>
                                    )}
                                </td>
                                <td className={classes}>
                                    {isEditing ? (
                                        <Input
                                            name="start"
                                            type="time"
                                            value={formData.start}
                                            onChange={handleChange}
                                            size="md"
                                        />
                                    ) : (
                                        <Typography
                                            variant="small"
                                            color="blue"
                                            type="time"
                                            className="font-normal"
                                        >
                                            {row.start}
                                        </Typography>
                                    )}
                                </td>
                                <td className={classes}>
                                    {isEditing ? (
                                        <Input
                                            name="end"
                                            value={formData.end}
                                            onChange={handleChange}
                                            type="time"
                                            size="md"
                                        />
                                    ) : (
                                        <Typography
                                            variant="small"
                                            color="blue"
                                            type="time"
                                            className="font-normal"
                                        >
                                            {row.end}
                                        </Typography>
                                    )}
                                </td>
                                <td className={classes}>
                                    {isEditing ? (
                                        <div className="flex gap-2">
                                            <Button
                                                size="md"
                                                color="black"
                                                onClick={handleSave}
                                            >
                                                ✌️
                                            </Button>
                                            <Button
                                                size="md"
                                                color="black"
                                                onClick={handleCancel}
                                            >
                                                ❌
                                            </Button>
                                            <Button
                                                size="md"
                                                color="black"
                                                onClick={() => {
                                                    handleDelete(index)
                                                }}
                                            >
                                                ☠️
                                            </Button>
                                        </div>
                                    ) : (
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue"
                                            className="font-medium"
                                            onClick={() => handleEdit(row)}
                                        >
                                            Edit
                                        </Typography>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
                <div className="flex justify-center align-middle gap-10 mt-6">
                    <Button
                        size="md"
                        color="black"
                        onClick={() => {
                            handleAdd()
                        }}
                    >
                        Add Row
                    </Button>
                {editRowName !== null ? (
                    <Button
                        size="md"
                        color="black"
                        onClick={() => {
                            handleDelete(index)
                        }}
                    >
                        Submit
                    </Button>
                ) : null}
                </div>
           
           
        </Card>
    );
}

export default Table;
