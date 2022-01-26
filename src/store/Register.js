import {Store} from 'pullstate';

export const Register = new Store({
  // api call results
  business_info_res: null,

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
    financials: [
      'shopping_credits',
      'fashion_shopping_credits',
      'is_commission_qualified',
      'renewal_status',
      'ewallet',
      'sb_date',
      'opulence_currency',
      'opulence_points',
      'number_of_spin',
    ],
    downlines: ['volumes', 'downline'],
    binary: ['username'],
    map2d: ['per_country'],
  },
});

export default Register;
