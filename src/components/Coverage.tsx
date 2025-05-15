import React from 'react';
import { Globe2 } from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { Tooltip } from 'react-tooltip';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';


const MapChart = () => (
  <div style={{ width: "100%", overflowX: "auto", borderStyle: "double" }}>
    <ComposableMap width={1400} height={800} projectionConfig={{ scale: 300 }}>
      <Geographies geography={`${import.meta.env.BASE_URL}map.json`}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = geo.id === "ESP" || geo.id === "ARG";
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isHighlighted ? "#FFA500" : "#ffffff", // orange for selected
                    outline: "none",
                  },
                  hover: {
                    fill: isHighlighted ? "#CC7000" : "#dddddd", // darker orange or gray on hover
                    outline: "none",
                  },
                  pressed: {
                    fill: isHighlighted ? "#CC7000" : "#dddddd",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>

      {/* Spain Marker + Annotation */}
      <Marker coordinates={[-3.7038, 40.4168]}>
        <circle
          r={8}
          fill="#FF5533"
          stroke="#fff"
          strokeWidth={2}
          data-tooltip-id="map-tooltip"
          data-tooltip-content="20+ shelters"
        />
      </Marker>
      <Annotation
        subject={[-3.7038, 40.4168]}
        dx={-30}
        dy={-20}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FF5533" fontWeight={"bold"}>
          Spain
        </text>
      </Annotation>

      {/* Argentina Marker + Annotation */}
      <Marker coordinates={[-64.4173, -34.6118]}>
        <circle
          r={8}
          fill="#FF5533"
          stroke="#fff"
          strokeWidth={2}
          data-tooltip-id="map-tooltip"
          data-tooltip-content="30+ shelters"
        />
      </Marker>
      <Annotation
        subject={[-64.4173, -34.6118]}
        dx={-40}
        dy={-20}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="#FF5533" fontWeight={"bold"}>
          Argentina
        </text>
      </Annotation>
    </ComposableMap>

    <Tooltip id="map-tooltip" />
  </div>
)


const Coverage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t('coverage.title')}</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            {t('coverage.subtitle')}
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className="text-blue-100">{t('coverage.legend.regions')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 size={20} className="text-white" />
              <span className="text-blue-100">{t('coverage.legend.shelters')}</span>
            </div>
          </div>
          <MapChart></MapChart>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{t('coverage.locations.spain.title')}</h3>
              <p className="text-blue-100">{t('coverage.locations.spain.description')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{t('coverage.locations.southAmerica.title')}</h3>
              <p className="text-blue-100">{t('coverage.locations.southAmerica.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;