import { BuyMeNear } from '..'
import { storage, Context, logging } from 'near-sdk-as'

describe('Obtener el total de donaciones', () => {
  it('Deberia estar en cero', () => {
    const buymenear = new BuyMeNear()
    expect(buymenear.getTotalDonations()).toBe(0, "Tiene que ser cero");
  });

});

describe('Probando cuentas', () => {
  /*it('No deberian haber cuentas', () => {
    const buymenear = new BuyMeNear()
    var arr: string[] = [];
    expect(buymenear.getAllUserAddresses()).toBe(arr, "No hay cuentas en este momento");
  });*/

  it('No deberian haber cuentas', () => {
    const buymenear = new BuyMeNear()
    var arr: string[] = [];
    var user = buymenear.getUserProfile('managua.near');
    console.log("" + user?.balance);
    expect(user).actual;
  });

});
