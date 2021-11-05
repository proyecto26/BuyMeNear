import { BuyMeNear } from '..'

describe('BuyMeNear', () => {
  
  it('should donations be zero when contract is created', () => {
    const buymenear = new BuyMeNear()
    expect(buymenear.getTotalDonations()).toBe(0, "should be 0");
  });

  it('should accounts be empty list', () => {
    const buymenear = new BuyMeNear()
    expect(buymenear.getAllUserAddresses().length).toBe(0, "should be 0");
  });
});
