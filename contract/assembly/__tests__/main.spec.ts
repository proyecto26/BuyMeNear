import { BuyMeNear } from '..'

describe('BuyMeNear', () => {
  
  it('should donations be zero when contract is created', () => {
    const buymenear = new BuyMeNear();
    expect(buymenear.getTotalDonations()).toBe(0, "should be 0");
  });

  it('should accounts be empty list', () => {
    const buymenear = new BuyMeNear();
    expect(buymenear.getAllUserAddresses().length).toBe(0, "should be 0");
  });

  it('should have an account when a profile is update', () => {
    const buymenear = new BuyMeNear();
    expect(buymenear.getAllUserAddresses().length).toBe(0, "should be 0");

    buymenear.updateUserProfile(
      'David',
      'Gonzalez',
      'Near Developer',
      `I'm a experienced Developer looking for job opportunities with Blockchain and Smart contracts`,
      'https://avatars.githubusercontent.com/u/1445496?v=4'
    );
    expect(buymenear.getAllUserAddresses().length).toBe(1, "should be 1");
  });
});
