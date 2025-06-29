export default function CalculateAge(): number {
    const birthDate = new Date(2006, 5, 16); // June 16, 2006
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear() - 1;
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff > 0 || (monthDiff === 0 && today.getDate() >= birthDate.getDate())) {
        age++;
    }
    return age;
}