using System;
using UnityEngine;


namespace UnityStandardAssets.Effects
{
    public class Hose : MonoBehaviour
    {
        public float maxPower = 20;
        public float minPower = 5;
        public float changeSpeed = 5;
        public ParticleSystem[] hoseWaterSystems;
        public Renderer systemRenderer;

        private float m_Power;


        // Update is called once per frame
        private void Update()
        {
            m_Power = Mathf.Lerp(m_Power, true ? maxPower : minPower, Time.deltaTime*changeSpeed);

            foreach (var system in hoseWaterSystems)
            {
                system.startSpeed = m_Power;
                var emission = system.emission;
                emission.enabled = (m_Power > minPower*1.1f);
            }
        }
    }
}
