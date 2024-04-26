import React, {ComponentPropsWithoutRef} from 'react';

const CypressIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg width={props.size} height={props.size} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMid" {...props}>
            <defs>
                <linearGradient x1="6.31990833%" y1="44.0284953%" x2="87.5200593%" y2="58.4063838%" id="cypressGradient-1">
                    <stop stopColor="#315C55" offset="0%"></stop>
                    <stop stopColor="#09293F" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="54.2975471%" y1="27.2620916%" x2="50%" y2="100%" id="cypressGradient-2">
                    <stop stopColor="#4FB38D" offset="0%"></stop>
                    <stop stopColor="#315C55" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="13.9089831%" y1="50%" x2="70.8193808%" y2="54.9595072%" id="cypressGradient-3">
                    <stop stopColor="#4FB38D" offset="0%"></stop>
                    <stop stopColor="#97DEC0" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="53.8595989%" y1="30.892265%" x2="38.3884555%" y2="95.7936297%" id="cypressGradient-4">
                    <stop stopColor="#97DEC0" offset="0%"></stop>
                    <stop stopColor="#FFFFF0" stopOpacity="0" offset="100%"></stop>
                    <stop stopColor="#FFFFF0" stopOpacity="0" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g>
                <path
                    d="M141.651196,223.943467 L137.316065,234.469333 C136.45478,236.552533 134.485522,237.963733 132.269576,238.059733 C130.806455,238.114667 129.329512,238.155733 127.838746,238.155733 C76.8145529,238.128533 31.6703279,202.042667 20.4835188,152.32 L3.11509558,156.253333 C9.39230154,184.143467 25.1469488,209.457067 47.4796295,227.548267 C70.0720779,245.844267 98.5316811,255.945067 127.647349,256 C127.688287,256 127.907329,256 127.907329,256 C129.616607,256 131.312593,255.958933 133.008047,255.890667 C142.143511,255.506667 150.308169,249.764267 153.795839,241.253333 L159.457455,227.493333 L141.651196,223.943467 Z"
                    fill="url(#cypressGradient-1)"></path>
                <path
                    d="M4.54047351,161.9136 C1.53178891,150.922133 0,139.5056 0,128.006933 C0,75.5157333 32.8631006,27.52 81.781825,8.59312 L88.1957359,25.24496 C46.0875918,41.54048 17.8059874,82.8341333 17.8059874,128.006933 C17.8059874,137.915733 19.1188082,147.728533 21.7035654,157.185067 L4.54047351,161.9136 Z"
                    fill="url(#cypressGradient-2)"></path>
                <path
                    d="M225.692888,77.2976 C206.655844,40.636 169.184121,17.85792 127.924342,17.85792 C113.304836,17.85792 99.0957692,20.6811733 85.7203406,26.2317867 L78.896522,9.74437333 C94.4458965,3.28923733 110.938962,4.40388241e-15 127.924342,4.40388241e-15 C175.858013,4.40388241e-15 219.374676,26.4510933 241.48842,69.0469333 L225.692888,77.2976 Z"
                    fill="url(#cypressGradient-3)"></path>
                <path
                    d="M89.7274399,101.5968 C100.052752,101.5968 108.463567,107.12 112.784876,116.754667 L113.126731,117.5088 L130.46779,111.6016 L130.098288,110.710933 C123.383459,94.3056 107.916492,84.1088 89.7274399,84.1088 C76.9405556,84.1088 66.5466598,88.2208 57.9582715,96.6629333 C49.4246969,105.050667 45.1032819,115.603733 45.1032819,128.034133 C45.1032819,140.3552 49.4246969,150.853333 57.9582715,159.241067 C66.5466598,167.683733 76.9405556,171.7952 89.7274399,171.7952 C107.916492,171.7952 123.383459,161.5984 130.098288,145.206933 L130.46779,144.316267 L113.099617,138.3952 L112.771053,139.176533 C108.901121,148.646933 100.285086,154.3072 89.7274399,154.3072 C82.5341197,154.3072 76.4620643,151.7856 71.6479095,146.824 C66.7795256,141.794133 64.3179534,135.476267 64.3179534,128.048 C64.3179534,120.5648 66.724765,114.370133 71.6479095,109.1072 C76.4482412,104.118933 82.5341197,101.5968 89.7274399,101.5968 Z"
                    fill="#09293F"></path>
                <polygon fill="#09293F"
                         points="198.340727 85.7264 173.628774 148.454933 148.752008 85.7264 128.402302 85.7264 163.289639 171.342933 138.467634 231.728 156.26007 235.277867 217.569168 85.7264"></polygon>
                <path
                    d="M241.48842,69.0469333 C250.491426,86.585413 256,107.185152 256,128.270804 C256,177.470749 228.328804,220.187364 187.746749,241.613772 L178.978892,226.065967 C214.169866,207.714 238.206111,170.808235 238.206111,128.270804 C238.206111,109.811937 233.692686,92.5795665 225.692888,77.2976 C225.692888,77.2976 241.48842,69.0469333 241.48842,69.0469333 Z"
                    fill="url(#cypressGradient-4)"></path>
            </g>
        </svg>
    );
};

export default CypressIcon;
