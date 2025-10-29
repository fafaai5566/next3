import { ProjectData } from '@/types/ProjectData';
import { MetricCluster } from '../../components/metrics';
import MetricClusterSingle from '@/app/components/metrics/MetricClusterSingle';
import ArticleSplit from '@/app/components/ArticleSplit';
import ArticleCluster from '@/app/components/ArticleCluster';   
import Divider from '@/app/components/divider';    

export const projectsC: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Bank Albilad Commercial Banking',
    thumbnail: '/images/projects/albilad/albiladLogo.png',
    bgColor: '#CFE0EC',
    description: 'Modernizing legacy banking into a seamless digital experience',
    timeline: 'Sep 2024 - Jan 2025',
    subtitle: 'Bank Albilad',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Modernizing legacy banking into a seamless digital experience
        </p>
        <Divider className="my-8 border-neutralBorder-level2" />
        
        {/* <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16 flex flex-col items-center text-center">
  <img
    src="/images/projects/emptystate3D.png"
    alt="empty state illustration"
    className="w-[150px] h-auto mb-4"
  />
  <p className="text-body-3 text-neutralFg">
    This story isn’t ready yet, but it’s on the way
  </p>

</div> */}
   <p>
    In this project, I collaborated with two other designers to craft Bank Albilad’s new digital banking ecosystem, which includes both mobile and web banking platforms. The solution delivers seamless account management, advanced payment options, and enhanced security features — all unified through Backbase’s Banking Platform. This implementation fulfills Bank Albilad’s vision of providing a truly seamless, omnichannel customer experience while optimizing human interaction for complex services.
        </p>

            <h3>My key contributions include:</h3>
    
          <ArticleCluster className="mt-8 mb-8">
                <ArticleSplit title="Designed digital banking features">
                      <p>
               I designed features such as the onboarding process, domestic and international transfers, bill payments, card management, and more. I also made customized adjustments based on Backbase’s core features to fulfill the client’s specific needs.
                  </p>
                </ArticleSplit>
                      <ArticleSplit title="Managed and expanded design systems">
                       <p>
                I created and managed right-to-left (RTL) components for Arabic text, adjusting the visual flow and layout to align with standard design patterns. I worked on components for both mobile and web banking platforms.
                  </p>
                </ArticleSplit>
      
                </ArticleCluster>
        
      </>
    ),
  },
  {
    id: 'project-2',
    title: 'Mango Digital Wallet',
    subtitle: 'Mango Kiosk',
    description: 'Designing a Digital Wallet Tailored for the UAE Market',
    timeline: 'Jun 2022 - Aug 2022',
    thumbnail: '/images/projects/mango/mangoLogo.png',
    bgColor: '#F5CA83',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Designing a Digital Wallet Tailored for the UAE Market
        </p>
        
          <div className="bg-neutralBg-level2 px-0 py-0 rounded-md mt-12 mb-16">
  <img
    src="/images/projects/mango/mango_wallet.png"
    alt="Search results"
    className="w-full rounded-md"
  />
</div>

  <p>In the UAE, there is an underserved market consisting of migrant blue-collar workers who lack access to basic financial services such as bank accounts and payment cards. The goal of the Mango Digital Wallet is to provide these individuals with a digital financial tool that enables them to make person-to-person transfers, online and POS payments, and use Mango Kiosks to top up their wallets.</p>

<h3>My key contributions include:</h3>
    
          <ArticleCluster className="mt-8 mb-8">
                <ArticleSplit title="Designed digital wallet features">
                      <p>
               I designed features such as the onboarding process with KYC validation, wallet account overview, wallet to wallet payments, transactions overview, Top up and more. I created these features from scratch using Mambu Payments solutions.
                  </p>
                </ArticleSplit>
                      <ArticleSplit title="Integrated features within OXY chat">
                       <p>
                I successfully integrated digital wallet features into the OXY chat app, providing users with a seamless experience. They can easily transfer money to their contacts within the chat and manage their digital finances all in one place.
                  </p>
                </ArticleSplit>
                      <ArticleSplit title="Built the design system">
                       <p>
                I created components from scratch by integrating the customer’s branding. I also developed design guidelines and ensured consistency between the iOS and Android UI components.
                  </p>
                </ArticleSplit>
      
                </ArticleCluster>

        
        
      </>
      ),
  },

];