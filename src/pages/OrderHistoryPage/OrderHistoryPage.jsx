
import * as userService from '../../utilities/users-service.js';

export default function OrderHistoryPage() {
    const handleCheckToken = async () => {
    const expDate = await userService.checkToken()
    console.log(expDate)
  }
  return (
    <>
    <h1>OrderHistoryPage</h1>
    <button 
    onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}