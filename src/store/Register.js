import {Store} from 'pullstate';

export const Register = new Store({
  // api call results
  business_info_res: null,
  chart: null,

  // layout fields
  layoutFields: {
    profile: [
      {member_name: 'Member Name'},
      {member_type: 'Member type'},
      {user_id: 'User ID'},
      {username: 'Username'},
      {smart_buy: 'Smart Buy'},
      {email: 'Email'},
      {member_last_name: 'Last Name'},
      {rank: 'Rank'},
      {renewal_date: 'Renewal Date'},
      {years_of_operation: 'Years Of Operation'},
      {per_country: 'per_country'},
      // 'bonus_shopping_credits',
      // 'vip_rewards',
      // 'binary_side',
      // 'display_gift_card',
    ],
    activity: [],
    financial: [
      {shopping_credits: 'Shopping Credits'},
      {fashion_shopping_credits: 'Fashion Shopping Credits'},
      {is_commission_qualified: 'Commission Qualified'},
      {renewal_status: 'Renewal Status'},
      {ewallet: 'Ewallet'},
      {sb_date: 'SB Date'},
      {opulence_currency: 'Opulence Currency'},
      {opulence_points: 'Opulence Points'},
      {number_of_spin: 'Nmber Of Spin'},
    ],
    downline: [{volumes: 'Volumes'}, {downline: 'Downline'}],
    binary: [{username: 'Username'}],
    map2d: [{per_country: 'Per Country'}],
  },
});

export default Register;
