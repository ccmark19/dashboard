import {Store} from 'pullstate';

export const Register = new Store({
  // api call results
  business_info_res: null,
  organization_info_res: null,
  geo_info_res: null,
  geo_info_user_country: null,
  commission_qualified: null,
  rawLaunch_data: null,
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
    downline: [
      {total_members: 'Total Members'},
      {total_members_active: 'Total Members Active'},
      {total_members_left: 'Total Members Left'},
      {total_members_left_active: 'Total Members Left Active'},
      {total_members_met_35_las_30_days: 'Total Members Met 35 last 30 Days'},
      {total_members_right: 'Total Members Right'},
      {total_members_right_active: 'Total Members Right Active'},
      {volumes: 'Volumes'},
      {downline: 'Downline'},
    ],
    binary: [
      {username: 'Username'},
      {binary: 'Binary Commissions'},
      {whole_sale: 'Wholesale Profit'},
      {retail: 'Retail Commissions'},
      {personal_team_volume: 'Personal Team Volume'},
      {
        top_product_purchases_last_30_days:
          'Top Product Purchases Last 30 Days',
      },
      {
        top_SB_purchases_last_30_days: 'Top SB Purchases Last 30 Days',
      },
      {
        top_launchers_last_30_days: 'Top Launchers Last 30 Days',
      },
    ],
    map2d: [{per_country: 'Per Country'}],
  },
});

export default Register;
