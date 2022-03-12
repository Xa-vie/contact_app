import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import './Style.css';
import { auth, db, logout, app } from "../firebase";
import { query, collection, getDocs, where, deleteDoc, doc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";


function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "contacts")
    const getUsers = async () => {
        try {
            const q = query(collection(db, "contacts"), where("uid", "==", user?.uid));
            console.log('q:', q)
            const data = await getDocs(q);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        getUsers();
    }, [user, loading]);


    const createUser = async () => {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const presentData = doc.docs[0].data();
        await addDoc(usersCollectionRef, { uid: presentData.uid, name: name, phone: Number(phone), email: email });
        getUsers();
    };
    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <div className="register" style={{ height: "80vh" }}>
                    <div className="register__container" >
                        <div>Logged in as <strong>{user?.email}</strong></div>

                        <h2>Add a contact</h2>

                        <input
                            type="text"
                            className="register__textBox"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                        />
                        <input
                            type="number"
                            className="register__textBox"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                        />
                        <input
                            type="text"
                            className="register__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />

                        <button className="register__btn" onClick={createUser}>
                            Save
                        </button>
                        <button className="dashboard__btn" onClick={logout}>
                            Logout
                        </button>
                    </div>

                </div>

                <center>
                    <h2>See your contacts</h2>

                    <table class="full width" border='1'>
                        <tr className="default">
                            {
                                ['Name', 'Phone', 'Email'].map((label) =>
                                    <th> <h2>{label}</h2></th>
                                )
                            }
                        </tr>
                        {
                            users.map((data) =>
                                <tr>
                                    <td><h3>{data.name}</h3></td>
                                    <td><h3>{data.phone}</h3></td>
                                    <td><h3>{data.email}</h3></td>
                                </tr>
                            )
                        }
                    </table>
                </center>
            </div>


        </div >
    );
}
export default Dashboard;