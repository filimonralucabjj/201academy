import React from 'react'

const TimeTable = () => {
    return (
        <div className="flex content-center justify-center mt-8 text-sm text-gray-300" >
            <div>
                <table className="mx-6 table-auto flex content-center justify-center">
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>19:00 - 20:30</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>20:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Wendsday</td>
                            <td>19:00 - 20:30</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>20:30 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>19:00 - 20:30</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>14:00 - 15:30</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>14:00 - 15:30</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-5 flex">
                    <svg className="h-5 w-5 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm mx-2">Bulevardul Poitiers Nr 2 Etaj 4, Iași 700671</p>
                </div>
            </div>
        </div>
    )
}

export default TimeTable