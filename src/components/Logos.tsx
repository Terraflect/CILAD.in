import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export function DsnluLogo({ className = "w-14 h-14", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Damodaram Sanjivayya National Law University Official Logo"
      {...props}
    >
      <defs>
        {/* Top Arc Path for University Name (Spans from ~8 o'clock to ~4 o'clock) */}
        <path
          id="dsnlu-top-arc"
          d="M 38 192 A 120 120 0 1 1 262 192"
          fill="none"
        />
        {/* Bottom Arc Path for VISAKHAPATNAM */}
        <path
          id="dsnlu-bottom-arc"
          d="M 52 222 A 122 122 0 0 0 248 222"
          fill="none"
        />
      </defs>

      {/* Outer White/Grey Rim */}
      <circle
        cx="150"
        cy="150"
        r="148"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />

      {/* Outer Blue Ring (#438be2 matching DSNLU.jpg) */}
      <circle cx="150" cy="150" r="144" fill="#438be2" />

      {/* Inner Green Medallion (#74cf67 matching DSNLU.jpg) */}
      <circle
        cx="150"
        cy="150"
        r="102"
        fill="#74cf67"
        stroke="#e2e8f0"
        strokeWidth="1.2"
      />

      {/* Top Circular Text: DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY */}
      <text
        fill="#ffffff"
        fontFamily="'Arial Narrow', 'Roboto Condensed', 'Lato', sans-serif"
        fontSize="16.2"
        fontWeight="900"
        letterSpacing="0.03em"
      >
        <textPath href="#dsnlu-top-arc" startOffset="50%" textAnchor="middle">
          DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY
        </textPath>
      </text>

      {/* Bottom Circular Text: VISAKHAPATNAM */}
      <text
        fill="#ffffff"
        fontFamily="'Arial Narrow', 'Roboto Condensed', 'Lato', sans-serif"
        fontSize="17.5"
        fontWeight="900"
        letterSpacing="0.06em"
      >
        <textPath
          href="#dsnlu-bottom-arc"
          startOffset="50%"
          textAnchor="middle"
        >
          VISAKHAPATNAM
        </textPath>
      </text>

      {/* Left & Right Yellow 5-Pointed Stars */}
      <polygon
        points="54,210 56.8,216.2 63.5,216.8 58.3,221.2 59.8,227.8 54,224.2 48.2,227.8 49.7,221.2 44.5,216.8 51.2,216.2"
        fill="#fde047"
      />
      <polygon
        points="246,210 248.8,216.2 255.5,216.8 250.3,221.2 251.8,227.8 246,224.2 240.2,227.8 241.7,221.2 236.5,216.8 243.2,216.2"
        fill="#fde047"
      />

      {/* White Radiating Sunburst Lines behind Lady Justice */}
      <g stroke="#ffffff" strokeWidth="1.2" opacity="0.95">
        <line x1="150" y1="108" x2="108" y2="82" />
        <line x1="150" y1="108" x2="104" y2="90" />
        <line x1="150" y1="108" x2="102" y2="98" />
        <line x1="150" y1="108" x2="102" y2="106" />
        <line x1="150" y1="108" x2="104" y2="114" />
        <line x1="150" y1="108" x2="108" y2="122" />
        <line x1="150" y1="108" x2="114" y2="128" />
        <line x1="150" y1="108" x2="192" y2="82" />
        <line x1="150" y1="108" x2="196" y2="90" />
        <line x1="150" y1="108" x2="198" y2="98" />
        <line x1="150" y1="108" x2="198" y2="106" />
        <line x1="150" y1="108" x2="196" y2="114" />
        <line x1="150" y1="108" x2="192" y2="122" />
        <line x1="150" y1="108" x2="186" y2="128" />
      </g>

      {/* Lady Justice (Crisp White Figure with Black Contours matching DSNLU.jpg) */}
      <g stroke="#0f172a" strokeWidth="1.4" strokeLinejoin="round">
        {/* Ornate Crown / Mitre */}
        <path
          d="M 141 58 L 143 50 L 150 46 L 157 50 L 159 58 Z"
          fill="#ffffff"
        />
        {/* Hair & Head */}
        <path
          d="M 140 62 C 138 68 138 74 141 78 H 159 C 162 74 162 68 160 62 Z"
          fill="#ffffff"
        />
        <circle cx="150" cy="65" r="6.5" fill="#ffffff" />
        {/* Blindfold */}
        <path d="M 143.5 63.5 H 156.5 V 66.2 H 143.5 Z" fill="#0f172a" />
        {/* Neck & Collar */}
        <path d="M 146 72 H 154 V 78 H 146 Z" fill="#ffffff" />
        {/* Draped Robe Torso */}
        <path
          d="M 134 78 Q 150 75 166 78 L 166 138 H 134 Z"
          fill="#ffffff"
        />
        {/* Robe Drapery Folds */}
        <path d="M 142 82 L 139 136" stroke="#0f172a" strokeWidth="1.1" />
        <path d="M 150 80 L 150 136" stroke="#0f172a" strokeWidth="1.1" />
        <path d="M 158 82 L 160 136" stroke="#0f172a" strokeWidth="1.1" />

        {/* Viewer's Left Arm (Extended Downward) */}
        <path
          d="M 134 79 L 112 116 L 118 120 L 138 88 Z"
          fill="#ffffff"
        />
        {/* Hand & Hilt */}
        <circle cx="110" cy="122" r="3.5" fill="#ffffff" />
        <path d="M 105 126 L 113 118" stroke="#0f172a" strokeWidth="2.5" />

        {/* Viewer's Right Arm (Raised Holding Scales) */}
        <path
          d="M 166 79 L 184 74 L 186 64 L 179 62 L 176 70 L 162 74 Z"
          fill="#ffffff"
        />

        {/* Hanging Balance Scales on Viewer's Right */}
        <line
          x1="184"
          y1="66"
          x2="180"
          y2="116"
          stroke="#0f172a"
          strokeWidth="1.6"
        />
        <line
          x1="173"
          y1="82"
          x2="195"
          y2="84"
          stroke="#0f172a"
          strokeWidth="1.6"
        />
        <line
          x1="174"
          y1="82"
          x2="188"
          y2="114"
          stroke="#0f172a"
          strokeWidth="1.2"
        />
        <line
          x1="194"
          y1="84"
          x2="198"
          y2="114"
          stroke="#0f172a"
          strokeWidth="1.2"
        />
        <path
          d="M 176 114 Q 187 122 198 114 Z"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth="1.4"
        />
      </g>

      {/* Open Legal Book (Behind the Kalash) */}
      <g>
        {/* Outer Book Cover Edge */}
        <rect
          x="93"
          y="142"
          width="114"
          height="42"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {/* Left & Right Page Spread */}
        <path
          d="M 150 142 Q 124 134 97 140 V 180 Q 124 175 150 181 Z"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="1.3"
        />
        <path
          d="M 150 142 Q 176 134 203 140 V 180 Q 176 175 150 181 Z"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="1.3"
        />
        {/* Subtle Text Lines on Book Pages */}
        <g stroke="#cbd5e1" strokeWidth="1">
          <line x1="103" y1="147" x2="143" y2="145" />
          <line x1="103" y1="153" x2="143" y2="151" />
          <line x1="103" y1="159" x2="143" y2="157" />
          <line x1="103" y1="165" x2="143" y2="163" />
          <line x1="103" y1="171" x2="143" y2="169" />
          <line x1="157" y1="145" x2="197" y2="147" />
          <line x1="157" y1="151" x2="197" y2="153" />
          <line x1="157" y1="157" x2="197" y2="159" />
          <line x1="157" y1="163" x2="197" y2="165" />
          <line x1="157" y1="169" x2="197" y2="171" />
        </g>
      </g>

      {/* Sacred Flame & Mango Leaves & Ornate Kalash Pot */}
      <g>
        {/* Tall Red & Yellow Sacred Flame */}
        <path
          d="M 137 152 C 139 138 144 132 146 120 C 142 121 138 120 139 116 C 144 112 145 96 151 89 C 154 98 153 110 158 117 C 155 119 152 119 150 122 C 153 132 158 139 159 152 Z"
          fill="#ef4444"
        />
        <path
          d="M 145 148 C 146 134 148 124 149 102 C 152 115 152 132 153 148 Z"
          fill="#facc15"
        />

        {/* Five Green Mango Leaves on Rim of Kalash */}
        <g fill="#65a30d" stroke="#14532d" strokeWidth="1">
          <path d="M 150 156 C 134 154 120 146 116 141 C 126 142 140 148 150 156 Z" />
          <path d="M 150 156 C 138 148 130 138 129 133 C 137 137 145 145 150 156 Z" />
          <path d="M 150 156 C 146 144 146 134 150 128 C 154 134 154 144 150 156 Z" />
          <path d="M 150 156 C 162 148 170 138 171 133 C 163 137 155 145 150 156 Z" />
          <path d="M 150 156 C 166 154 180 146 184 141 C 174 142 160 148 150 156 Z" />
        </g>

        {/* Ornate Kalash Pot */}
        {/* Rim & Neck */}
        <ellipse
          cx="150"
          cy="157"
          rx="16"
          ry="3.2"
          fill="#fed7aa"
          stroke="#451a03"
          strokeWidth="1.2"
        />
        <path
          d="M 136 158 L 140 166 H 160 L 164 158 Z"
          fill="#9a3412"
          stroke="#451a03"
          strokeWidth="1.2"
        />
        {/* Main Globular Body of Kalash */}
        <path
          d="M 140 166 C 122 174 120 194 132 203 C 140 209 160 209 168 203 C 180 194 178 174 160 166 Z"
          fill="#f97316"
          stroke="#451a03"
          strokeWidth="1.5"
        />
        {/* Dark Base of Kalash */}
        <path
          d="M 127 195 C 134 209 166 209 173 195 C 166 201 134 201 127 195 Z"
          fill="#451a03"
        />
        {/* Decorative Scallop & Diamond Motif on Kalash */}
        <path
          d="M 126 185 Q 134 176 142 185 Q 150 176 158 185 Q 166 176 174 185"
          fill="none"
          stroke="#fde047"
          strokeWidth="1.4"
        />
        <path
          d="M 126 191 H 174"
          stroke="#fde047"
          strokeWidth="1.2"
        />
      </g>

      {/* Left & Right Dark Green Laurel Branches */}
      <g fill="#14532d" stroke="#052e16" strokeWidth="0.6">
        {/* Left Stem */}
        <path
          d="M 96 206 C 68 188 60 138 84 86"
          fill="none"
          stroke="#14532d"
          strokeWidth="1.6"
        />
        {/* Left Leaves */}
        <path d="M 84 198 C 74 196 70 188 76 186 C 82 188 86 194 84 198 Z" />
        <path d="M 74 184 C 64 180 62 172 68 170 C 74 172 76 180 74 184 Z" />
        <path d="M 68 168 C 58 162 58 152 64 152 C 70 154 70 164 68 168 Z" />
        <path d="M 67 150 C 58 142 60 132 66 134 C 70 138 70 146 67 150 Z" />
        <path d="M 70 132 C 62 124 65 114 71 116 C 75 120 73 128 70 132 Z" />
        <path d="M 75 114 C 69 106 72 96 78 99 C 81 103 78 110 75 114 Z" />
        <path d="M 82 96 C 78 88 82 80 87 84 C 89 88 85 94 82 96 Z" />

        {/* Right Stem */}
        <path
          d="M 204 206 C 232 188 240 138 216 86"
          fill="none"
          stroke="#14532d"
          strokeWidth="1.6"
        />
        {/* Right Leaves */}
        <path d="M 216 198 C 226 196 230 188 224 186 C 218 188 214 194 216 198 Z" />
        <path d="M 226 184 C 236 180 238 172 232 170 C 226 172 224 180 226 184 Z" />
        <path d="M 232 168 C 242 162 242 152 236 152 C 230 154 230 164 232 168 Z" />
        <path d="M 233 150 C 242 142 240 132 234 134 C 230 138 230 146 233 150 Z" />
        <path d="M 230 132 C 238 124 235 114 229 116 C 225 120 227 128 230 132 Z" />
        <path d="M 225 114 C 231 106 228 96 222 99 C 219 103 222 110 225 114 Z" />
        <path d="M 218 96 C 222 88 218 80 213 84 C 211 88 215 94 218 96 Z" />
      </g>

      {/* Bottom Dark-Green Ribbon with Sanskrit Motto: यतो धर्मस्ततो जयः */}
      <g>
        <path
          d="M 98 199 Q 150 218 202 199 C 207 198 212 208 206 212 Q 150 234 94 212 C 88 208 93 198 98 199 Z"
          fill="#065f46"
          stroke="#052e16"
          strokeWidth="1.2"
        />
        <text
          x="150"
          y="214"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="serif, 'Noto Sans Devanagari', 'Mangal'"
          fontSize="13.5"
          fontWeight="bold"
          letterSpacing="0.03em"
        >
          यतो धर्मस्ततो जयः
        </text>
      </g>
    </svg>
  );
}

export function CiladLogo({ className = "w-14 h-14", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Centre for International Law and Allied Disciplines (CILAD) Official Logo"
      {...props}
    >
      {/* Solid Pure Black Circular Seal matching DSNLU Logo's r=148 geometry */}
      <circle cx="150" cy="150" r="148" fill="#000000" />

      {/* =================================================================== */}
      {/* 1. LEFT & TOP ARCH: TWO STYLIZED WHITE PROTECTIVE HANDS             */}
      {/* =================================================================== */}
      <g>
        {/* Upper Hand & Forearm (Arching from top-center to upper-left) */}
        <path
          d="M 168 42 C 132 34 86 52 66 74 C 60 80 60 92 56 105 C 53 114 58 117 65 110 C 72 102 78 90 82 82 C 98 66 134 52 164 52 C 169 52 172 45 168 42 Z"
          fill="#ffffff"
        />
        <path
          d="M 65 110 C 70 105 76 96 79 86"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 74 96 C 68 106 60 114 54 116"
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Lower-Left Hand & Forearm (Arching from left-top down to 'C' of CILAD) */}
        <path
          d="M 56 92 C 44 98 37 118 37 142 C 37 188 55 228 84 247 C 88 250 92 243 88 239 C 62 220 45 184 46 144 C 46 132 52 122 54 110 C 56 100 60 90 56 92 Z"
          fill="#ffffff"
        />
        <path
          d="M 48 124 C 48 112 52 100 57 94"
          stroke="#000000"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>

      {/* =================================================================== */}
      {/* 2. RIGHT ARCH: BOTANICAL VINE WITH DUAL-TONE LEAVES & BERRIES       */}
      {/* =================================================================== */}
      <g>
        <path
          d="M 192 54 C 238 74 265 118 265 166 C 265 202 246 230 218 244"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 244 222 C 236 232 227 239 218 244"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Top-Center Prominent Berry */}
        <circle
          cx="182"
          cy="50"
          r="10"
          fill="#52525b"
          stroke="#ffffff"
          strokeWidth="4"
        />

        {/* Upper-Right Leaf 1 */}
        <g>
          <path
            d="M 226 68 C 212 54 214 38 220 36 C 230 42 236 56 226 68 Z"
            fill="#52525b"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 226 68 C 216 62 212 48 220 36 L 226 68 Z"
            fill="#ffffff"
          />
          <circle
            cx="235"
            cy="65"
            r="4"
            fill="#52525b"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
        </g>

        {/* Middle-Right Leaf 2 */}
        <g>
          <path
            d="M 246 102 C 230 88 214 94 210 102 C 218 112 234 112 246 102 Z"
            fill="#52525b"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 246 102 C 234 110 218 110 210 102 L 246 102 Z"
            fill="#ffffff"
          />
          <circle
            cx="248"
            cy="113"
            r="4.5"
            fill="#52525b"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
        </g>

        {/* Outer-Right Leaf 3 */}
        <g>
          <path
            d="M 264 152 C 270 134 286 132 292 140 C 288 152 276 156 264 152 Z"
            fill="#52525b"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 264 152 C 276 154 288 150 292 140 L 264 152 Z"
            fill="#ffffff"
          />
          <circle
            cx="269"
            cy="161"
            r="4"
            fill="#52525b"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
        </g>

        {/* Lower-Right Inner Berry */}
        <ellipse
          cx="248"
          cy="194"
          rx="6"
          ry="7.5"
          transform="rotate(-15 248 194)"
          fill="#52525b"
          stroke="#ffffff"
          strokeWidth="3.2"
        />
      </g>

      {/* =================================================================== */}
      {/* 3. CENTER MOTIF: DOVE + GLOBE/GEAR + GAVEL & SOUND BLOCK            */}
      {/* =================================================================== */}
      <g
        stroke="#ffffff"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 105 122 C 88 115 84 96 90 85 C 98 92 106 102 108 114" />
        <path d="M 108 114 C 112 98 120 92 126 95 C 128 97 124 103 121 108 C 117 116 110 126 98 138" />
        <path d="M 92 94 C 98 104 103 114 104 128" strokeWidth="2" />
      </g>

      <g stroke="#ffffff" strokeWidth="5.5" fill="none" strokeLinejoin="round">
        <circle cx="163" cy="133" r="45" />
        <path d="M 155 89 L 150 104 L 160 116 L 166 132 L 182 129 L 186 142 L 170 148 L 175 162 L 162 177" />
        <path
          d="M 150 100 C 134 108 128 126 134 144"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </g>

      <g>
        <g
          stroke="#ffffff"
          strokeWidth="5"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 110 162 L 136 136 L 154 154 L 128 180 Z" />
          <rect
            x="132"
            y="130"
            width="28"
            height="9"
            rx="4"
            transform="rotate(45 146 134.5)"
          />
          <rect
            x="102"
            y="160"
            width="28"
            height="9"
            rx="4"
            transform="rotate(45 116 164.5)"
          />
          <path d="M 145 163 L 175 193 L 166 202 L 136 172 Z" />
          <line x1="145" y1="181" x2="154" y2="172" strokeWidth="4" />
        </g>

        <g
          stroke="#ffffff"
          strokeWidth="4.8"
          fill="#000000"
          strokeLinejoin="round"
        >
          <path d="M 102 195 H 130 L 133 203 H 99 Z" />
          <rect x="93" y="203" width="46" height="9" rx="2" />
        </g>
      </g>

      {/* =================================================================== */}
      {/* 4. BOTTOM TYPOGRAPHY: BOLD WHITE 'CILAD'                            */}
      {/* =================================================================== */}
      <text
        x="152"
        y="258"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="'Lato', 'PT Sans', system-ui, -apple-system, sans-serif"
        fontSize="35"
        fontWeight="900"
        letterSpacing="0.12em"
      >
        CILAD
      </text>
    </svg>
  );
}

export function DualLogos({
  size = "md",
  className = "",
  showDivider = true,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showDivider?: boolean;
}) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-14 h-14",
    lg: "w-20 h-20 md:w-24 md:h-24",
    xl: "w-28 h-28 md:w-36 md:h-36",
  }[size];

  const dividerHeight = {
    sm: "h-7",
    md: "h-10",
    lg: "h-16",
    xl: "h-24",
  }[size];

  return (
    <div className={`flex items-center gap-4 md:gap-6 ${className}`}>
      <div className="relative group transition-transform hover:scale-105 duration-200">
        <DsnluLogo className={`${sizeClasses}`} />
      </div>

      {showDivider && <div className={`w-px bg-black/20 ${dividerHeight}`} />}

      <div className="relative group transition-transform hover:scale-105 duration-200">
        <CiladLogo className={`${sizeClasses}`} />
      </div>
    </div>
  );
}
