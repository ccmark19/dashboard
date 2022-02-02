import {Doughnut} from 'react-chartjs-2';
import {useState} from 'react';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size';

const shoppingCreditChart = ({business_info_res}) => {
  const [width, height] = useWindowSize();

  const prepSCU_SC = (SUC, SC) => {
    let prepArr = [];
    SUC != null ? prepArr.push(parseFloat(SUC.replace(',', ''))) : 0;
    SC != null ? prepArr.push(parseFloat(SC.replace(',', ''))) : 0;
    return prepArr;
  };

  const plugins_centerText = [
    {
      beforeDraw: function (chart) {
        if (
          business_info_res.fashion_shopping_credits != null &&
          business_info_res.shopping_credits != null
        ) {
          let sum;
          sum = (
            parseFloat(
              business_info_res.fashion_shopping_credits.replace(',', ''),
            ) + parseFloat(business_info_res.shopping_credits.replace(',', ''))
          ).toFixed(2);

          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.fontStyle = 'bold';
          ctx.fillStyle = '#EAEAEA';
          ctx.textBaseline = 'top';
          var text = `$${sum}`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      },
    },
  ];

  function getViewport() {
    // https://stackoverflow.com/a/8876069

    if (width <= 310) return 70;
    if (width <= 375) return 100;
    if (width <= 450) return 130;
    if (width <= 576) return 150;
    if (width <= 768) return 170;
    if (width <= 992) return 50;
    if (width <= 1200) return 95;
    return 120;
  }
  return (
    <div>
      <div id="shopping_credits">
        <div id="shopping_credits" className="text-center">
          <p>Shopping Credits</p>
        </div>
        <div>
          {business_info_res.fashion_shopping_credits != null &&
          business_info_res.shopping_credits != null ? (
            <Doughnut
              plugins={plugins_centerText}
              data={{
                labels:
                  business_info_res != null
                    ? [
                        `SCU ${business_info_res.shopping_credits}`,
                        `SC ${business_info_res.fashion_shopping_credits}`,
                      ]
                    : ['SCU', 'SC'],
                datasets: [
                  {
                    label: 'Doughnut',
                    data:
                      business_info_res != null
                        ? prepSCU_SC(
                            business_info_res.shopping_credits,
                            business_info_res.fashion_shopping_credits,
                          )
                        : 0,
                    backgroundColor: ['#c06351', '#349072'],
                    borderColor: ['#313331'],
                  },
                ],
              }}
              options={{
                cutout: getViewport(),
                layout: {
                  padding: 10,
                },
                color: '#EAEAEA',
                plugins: {
                  tooltip: {
                    enabled: true,
                    callbacks: {
                      footer: (ttItem) => {
                        let sum = 0;
                        let dataArr = ttItem[0].dataset.data;
                        dataArr.map((data) => {
                          sum += Number(data);
                        });

                        let percentage =
                          ((ttItem[0].parsed * 100) / sum).toFixed(2) + '%';
                        return `Portion in Percentage: ${percentage}`;
                      },
                    },
                  },
                  legend: {
                    position: 'top',
                    labels: {
                      boxWidth: 10,
                      boxHeight: 10,
                    },
                  },
                },
              }}
            />
          ) : (
            'Loading'
          )}
        </div>
      </div>
    </div>
  );
};

export default shoppingCreditChart;
