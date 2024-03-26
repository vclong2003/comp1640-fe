/*
{
    "_id": "65f607e61134090a6ff9d13b",
    "name": "Science and Engineering",
    "event_ids": [
      "65f60a050eb82d42ec56ff2c",
      "65f695fce41083e39302e986"
    ],
    "student_ids": [
      "65f6062b1134090a6ff9d124"
    ],
    "__v": 4,
    "mc": {
      "_id": "65f607911134090a6ff9d138",
      "name": "Long MC",
      "email": "charon3465@gmail.com"
    },
    "contribution_ids": [
      "65f7f9dbbe3dacaa87776497"
    ]
  }
*/

export interface IFacultyMc {
  _id: string;
  name: string;
  email: string;
}

export interface IFaculty {
  _id: string;
  name: string;
  mc: IFacultyMc;
}
