import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const userCollectionRef = collection(db, "users");
const membershipCollectionRef = collection(db, "memberships");
const transactionCollectionRef = collection(db, "transactions");

class userDataService {
    addUser = (newUser) => {
        return addDoc(userCollectionRef, newUser);
    };

    updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "users", id);
        return updateDoc(userDoc, updatedUser);
    };

    deleteUser = (id) => {
        const userDoc = doc(db, "users", id);
        return deleteDoc(userDoc);
    };

    getAllUsers = () => {
        return getDocs(userCollectionRef);
    };

    getUser = (id) => {
        const userDoc = doc(db, "users", id);
        return getDoc(userDoc);
    };
}

class membershipDataService {
    addMembership = (newMembership) => {
        return addDoc(membershipCollectionRef, newMembership);
    };

    updateMembership = (id, updatedMembership) => {
        const membershipDoc = doc(db, "memberships", id);
        return updateDoc(membershipDoc, updatedMembership);
    };

    deleteMembership = (id) => {
        const membershipDoc = doc(db, "memberships", id);
        return deleteDoc(membershipDoc);
    };

    getAllMemberships = () => {
        return getDocs(membershipCollectionRef);
    };

    getMembership = (id) => {
        const membershipDoc = doc(db, "memberships", id);
        return getDoc(membershipDoc);
    };
}

class transactionDataService {
    addTransaction = (newTransaction) => {
        return addDoc(transactionCollectionRef, newTransaction);
    };

    updateTransaction = (id, updatedTransaction) => {
        const transactionDoc = doc(db, "transactions", id);
        return updateDoc(transactionDoc, updatedTransaction);
    };

    deleteTransaction = (id) => {
        const transactionDoc = doc(db, "transactions", id);
        return deleteDoc(transactionDoc);
    };

    getAllTransactions = () => {
        return getDocs(transactionCollectionRef);
    };

    getTransaction = (id) => {
        const transactionDoc = doc(db, "transactions", id);
        return getDoc(transactionDoc);
    };
}

export default new userDataService();
membershipDataService = new membershipDataService();
transactionDataService = new transactionDataService();
export { membershipDataService, transactionDataService }