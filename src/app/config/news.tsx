import { JSX } from "react";
import { Image } from "@heroui/react";
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string | JSX.Element;
  imageUrl?: string;
}

export const NewsList: NewsItem[] = [
  {
    id: "HDEG5bGeAQ",
    title: "关于 2025 年部分节假日安排的通知",
    date: "2025-04-27",
    imageUrl: "/images/news/2025000002.jpg",
    summary:
      "根据国务院办公厅《关于 2025 年部分节假日安排的通知》，结合本单位实际情况，现将 2025 年五一劳动节放假安排通知如下：放假时间：5 月 1 日（周四）至 5 日（周一）放假调休，共 5 天。​",
    content: (
      <div className="prose max-w-none text-gray-700 [&>p]:leading-8  [&>p]:mb-4 indent-8">
        <Image
          src="/images/news/2025000001.jpg"
          alt="KEMP 肯普中国第一届经销商产品培训圆满收官，证书颁发见证成长"
          className="h-auto mb-5 md:max-w-[60%] m-auto"
        />
        <p className="mt-10">
          根据国务院办公厅《关于 2025
          年部分节假日安排的通知》，结合本单位实际情况，现将 2025
          年五一劳动节放假安排通知如下：​
        </p>
        <p className="text-primary">
          <span className="font-bold">放假时间：</span>5 月 1 日（周四）至 5
          日（周一）放假调休，共 5 天。
        </p>
        <p className="text-primary">
          <span className="font-bold">调班安排：</span>4 月 27
          日（周日）正常上班 / 上课，请大家提前做好工作 / 学习安排，并相互转告。
        </p>
        <p className="text-primary">
          <span className="font-bold">温馨提示：</span>
          放假期间，请各部门妥善安排好值班和安全、保卫等工作。如遇有重大突发事件，要按规定及时报告并妥善处置，确保假期安全。
        </p>
        <p className="h-10"> </p>
        <p className="text-right pr-20">
          祝全体员工度过一个愉快、祥和的五一劳动节！
        </p>
      </div>
    ),
  },
  {
    id: "jxYZattR66",
    title: "Cleco 华南地区优质经销商年度售后服务培训圆满举行",
    date: "2024-06-20",
    imageUrl: "/images/news/202406000001.jpg",
    summary:
      "近日，Cleco 成功举办华南地区优质经销商年度售后服务培训活动，本次活动由 APEX Tool Group 协办。来自华南地区的多位经销商代表齐聚一堂，共同参与了这场旨在提升售后服务质量的专业培训。",
    content: (
      <div className="prose max-w-none text-gray-700 [&>p]:leading-8  [&>p]:mb-4 indent-8">
        <Image
          src="/images/news/202406000001.jpg"
          alt="Cleco 华南地区优质经销商年度售后服务培训圆满举行"
          className="h-auto mb-5 md:max-w-[60%] m-auto"
        />
        <p className="mt-10">
          近日，Cleco 成功举办华南地区优质经销商年度售后服务培训活动，本次活动由
          APEX Tool Group
          协办。来自华南地区的多位经销商代表齐聚一堂，共同参与了这场旨在提升售后服务质量的专业培训。
        </p>
        <p>
          培训现场，讲师团队凭借丰富的专业知识和实践经验，围绕 Cleco
          产品的维修保养、故障诊断与排除、客户服务技巧等多方面内容，为经销商代表们进行了细致讲解。通过理论授课、案例分析、实操演练等多样化的培训方式，让经销商代表们深入了解
          Cleco
          产品售后的各个环节。在实操环节，代表们积极动手操作，讲师现场给予针对性指导，有效提升了大家解决实际问题的能力。
        </p>
        <p>
          在培训结束后，经销商代表们共同举起写有 “Cleco
          华南地区优质经销商年度售后服务培训”
          的横幅合影留念，现场气氛热烈而融洽。参与培训的经销商代表纷纷表示，此次培训收获颇丰，不仅提升了自身的专业技能，也加深了对
          Cleco
          品牌售后理念的理解，未来能够更好地为客户提供优质、高效的售后服务。
        </p>
        <p>
          Cleco
          一直以来高度重视经销商的服务能力建设，此次华南地区优质经销商年度售后服务培训的成功举办，将进一步增强经销商与品牌之间的合作紧密度。未来，Cleco
          将持续推进此类培训活动，助力经销商提升服务水平，携手为客户创造更大价值，共同推动品牌在华南地区市场的稳健发展。
        </p>
      </div>
    ),
  },
  {
    id: "VCZ4aNm44Q",
    title: "KEMP 肯普中国第一届经销商产品培训圆满收官，证书颁发见证成长",
    date: "2023-05-17",
    imageUrl: "/images/news/20230500001.jpg",
    summary:
      "近日，KEMP肯普中国第一届经销商产品培训成功落下帷幕。此次培训旨在提升经销商对KEMP产品的深入了解，增强业务能力，更好地服务市场与客户。",
    content: (
      <div className="prose max-w-none text-gray-700 [&>p]:leading-8  [&>p]:mb-4 indent-8">
        <Image
          src="/images/news/20230500001.jpg"
          alt="KEMP 肯普中国第一届经销商产品培训圆满收官，证书颁发见证成长"
          className="w-full h-auto mb-5"
        />
        <p>
          近日，KEMP肯普中国第一届经销商产品培训成功落下帷幕。此次培训旨在提升经销商对KEMP
          产品的深入了解，增强业务能力，更好地服务市场与客户。{" "}
        </p>
        <p>
          培训期间，KEMP
          肯普的专业讲师团队围绕公司的核心产品，从技术原理、产品优势到实际应用场景，进行了全方位、多层次的讲解。不仅有理论知识的深度剖析，还设置了实操环节，让经销商代表们能够亲身体验产品的性能和特点。通过互动式教学、案例分析等多种形式，经销商们积极参与讨论，与讲师及同行进行了充分的交流，现场学习氛围热烈。
        </p>
        <p>
          在培训结束后，举办了隆重的培训证书颁发仪式。仪式现场，KEMP
          肯普中国区负责人对经销商们在培训期间的认真态度和积极表现给予了高度评价，肯定了他们为推广
          KEMP
          产品所做出的努力，并鼓励大家将所学知识运用到实际工作中，不断提升服务质量和销售业绩。随后，依次为通过考核的经销商代表颁发了培训证书，当经销商代表们接过证书时，脸上洋溢着自豪与喜悦，这不仅是对他们培训成果的认可，更是对未来合作的激励。
        </p>
        <p>
          参与此次培训的经销商纷纷表示，通过系统的学习，对 KEMP
          肯普的产品有了更全面、更深入的认识，这将有助于他们在市场竞争中更好地满足客户需求，为客户提供更专业、更优质的解决方案。同时，他们也期待未来能有更多类似的培训活动，进一步提升自身能力，与
          KEMP 肯普携手共进，共同开拓更广阔的市场。
        </p>
        <p>
          此次 KEMP
          肯普中国第一届经销商产品培训的成功举办，不仅加强了品牌与经销商之间的联系与合作，也为
          KEMP 肯普在中国市场的进一步发展奠定了坚实基础。未来，KEMP
          肯普将继续秉持合作共赢的理念，为经销商提供更多支持与服务，共同推动品牌在中国市场的蓬勃发展。
        </p>
      </div>
    ),
  },
];
