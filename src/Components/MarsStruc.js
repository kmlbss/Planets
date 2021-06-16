import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MarsStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-mars">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Yer kimi bu planet də təbəqələrə ayrılmaya məruz qalıb və bu da sıx,
            metallik nüvə sferasının daha az sıx materiallarla örtülməsinə səbəb
            olub. Planetin interyerinin müasir modelləri nüvə sferasının
            radiusunu təqribən 1,794 ± 65 kilometr olaraq güman edir və onu
            təqribən 16–17% kükürdlə birlikdə, əsasən, dəmir və nikeldən təşkil
            edilmiş hesab edir. Bu dəmir sulfid nüvəsi qismən mayedir və onda
            mövcud olan yüngül elementlərinin konsentrasiyası Yerin nüvəsində
            olandan iki dəfə çoxdur. Nüvə planetdəki textonik və vulkanik
            cəhətlərin çoxunu formalaşdıran silikat mantiya təbəqəsi ilə əhatə
            edilmişdir, ancaq indi hərəkətsizdir. Silisium və oksigendən başqa
            Marsın qabığında ən çox yayılan elementlər dəmir, maqnezium,
            alüminium, kalsium və kaliumdur.
          </p>
          <p>
            Mars terrestrial planetdir, yəni silisium və oksigendən təşkil
            olunan minerallar, metallar və adətən süxuru əmələ gətirən başqa
            elementlərdən təşkil olunmuşdur. Marsın səthi başlıca olaraq
            toleyitik bazaltdan təşkil olunmuşdur, ancaq bəzi hissələr bazaltdan
            daha çox silisium oksidlə zəngindir. Bu da Yerdə və ya silisium
            oksid şüşəsində olan andezitik süxurlara oxşardır. Aşağı albedolu
            regionlarda plaqioklaz feldispat vardır. Şimali aşağı albedolu
            regionlar isə təbəqə silikatları və yüksək silisiumlu şüşənin normal
            miqdarından daha çoxuna sahibdir.
          </p>
          <p>
            <h3> Mars'da həyat </h3>
            Marsın səthində suyun mövcud olması ilə bağlı başqa bir dəlil isə
            bəzən su mövcud olanda formalaşan hematit və qotit kimi spesifik
            mineralların müəyyən edilməsidir. Qədim su hövzələri və
            axınlarını təyin etdiyinə inanılan bəzi dəlillər Mars Reconnaissance
            Orbiterin aparıldığı dəqiq tədqiqatlar tərəfindən inkar edilib.
            2004-cü ildə Opportunity yarosit mineralını müəyyən edib. Bu yalnız
            asidik suyun mövcudluğu zamanı formalaşır və bu da suyun nə vaxtsa
            Marsda mövcud olduğunu göstərir. Maye su üçün yeni sübutlar
            2011-ci ilin dekabrında NASA-ın Mars roveri tərəfindən səthdə
            mineral gipsin tapılmasından gəlir.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://mars.nasa.gov/system/downloadable_items/36195_PIA16078.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="data:image/jpeg;base64,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"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://mars.nasa.gov/system/news_items/main_images/8836_insight-illustration-1200.jpg"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarsStruc;
