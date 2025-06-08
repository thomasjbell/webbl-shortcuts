import React from 'react';

interface LittleLogoProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Optional className for Tailwind CSS or other styling.
   */
  className?: string;
}

const LittleLogo: React.FC<LittleLogoProps> = ({ className, ...rest }) => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1025 1025"
      className={className} // Apply the className here
      {...rest}
    >
      <defs>
        <style>
          {`
            .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {
              stroke-miterlimit: 10;
            }

            .cls-1, .cls-5 {
              stroke: #000;
            }

            .cls-1, .cls-6 {
              fill: #fafaf9;
            }

            .cls-2 {
              stroke: #0c0a09;
              stroke-width: 6px;
            }

            .cls-2, .cls-3 {
              fill: none;
            }

            .cls-3 {
              stroke-width: 26px;
            }

            .cls-3, .cls-4, .cls-6 {
              stroke: #fafaf9;
            }

            .cls-4 {
              fill: #fff;
            }

            .cls-4, .cls-6 {
              stroke-width: 20px;
            }

            .cls-5 {
              fill: #1c1917;
            }
          `}
        </style>
      </defs>
      <g id="Layer_5" data-name="Layer 5">
        <g>
          <circle className="cls-1" cx="115.84" cy="301.02" r="83.04" />
          <circle className="cls-1" cx="311.97" cy="723.98" r="83.04" />
          <circle className="cls-5" cx="311.97" cy="723.98" r="55.36" />
          <circle className="cls-1" cx="532.77" cy="353.78" r="69.2" />
          <circle className="cls-1" cx="741.69" cy="723.98" r="83.04" />
          <circle className="cls-5" cx="741.69" cy="723.98" r="55.36" />
          <circle className="cls-1" cx="909.16" cy="301.02" r="83.04" />
          <line className="cls-6" x1="117.22" y1="302.4" x2="288.09" y2="672.28" />
          <line className="cls-3" x1="342.31" y1="672.54" x2="532.77" y2="349.63" />
          <line className="cls-4" x1="909.16" y1="301.02" x2="766.3" y2="662.14" />
          <line className="cls-2" x1="354.17" y1="652.44" x2="495.81" y2="412.29" />
          <line className="cls-3" x1="710.27" y1="671.83" x2="532.77" y2="353.78" />
          <line className="cls-2" x1="699.46" y1="652.46" x2="566.5" y2="414.22" />
        </g>
      </g>
    </svg>
  );
};

export default LittleLogo;