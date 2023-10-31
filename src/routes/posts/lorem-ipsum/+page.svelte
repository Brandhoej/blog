<script>
  import { trail } from "$lib/stores/BreadcrumbStore";
  import { PostParagraph, PostTitle } from "$lib/atoms";
  import PostSection from "$lib/atoms/PostSection.svelte";
  import { AngleUpSolid } from "flowbite-svelte-icons";
  import PostImage from "$lib/molecules/PostImage.svelte";
  import Refer from "$lib/atoms/Refer.svelte";

  trail({
    href: "#lorem-ipsum",
    title: "Lorem Ipsum",
  });
</script>

<PostTitle fragment="lorem-ipsum">Lorem Ipsum</PostTitle>
<PostImage
  source="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
  alternative="cat"
  reference="fig:cat0"
  caption="This is a cat"
/>
<PostParagraph
  >Lorem ipsum dolor sit amet <Refer reference="fig:cat0" />, consectetur
  adipiscing elit <Refer reference="fig:cat1" />. Integer cursus sagittis fringilla. Cras hendrerit ante at
  metus dapibus, id malesuada sem laoreet. Suspendisse sollicitudin purus a diam
  placerat, vel lacinia lectus tincidunt. Sed tempus commodo turpis, id eleifend
  nibh. Quisque ac odio ut eros dignissim interdum in sit amet lectus. Nulla
  fermentum ante ullamcorper purus ultrices aliquam. Ut accumsan mauris in
  tortor condimentum, non suscipit nibh commodo. Sed ac ex non nulla consequat
  ullamcorper. Vivamus ut massa tellus. Fusce eget nibh libero. Fusce
  condimentum vehicula ornare. Nunc ac dolor nec magna laoreet iaculis. Duis
  quis vestibulum ante. Etiam in posuere sem.</PostParagraph
>
<PostSection fragment="habitasse">Habitasse</PostSection>
<PostParagraph
  >In hac habitasse platea dictumst. Pellentesque dignissim nunc at eleifend
  tincidunt. Maecenas a sapien bibendum, facilisis mauris id, hendrerit risus.
  Aenean nec interdum arcu. Pellentesque lectus dui, suscipit ut elit ac,
  iaculis ultricies massa. Nam scelerisque molestie odio vitae ultricies. Nulla
  hendrerit felis at eros semper, ut consectetur mi consectetur. Suspendisse in
  risus ex. Cras sit amet aliquam urna. Cras tempus sapien eget diam dictum, in
  suscipit eros scelerisque. Duis aliquet pharetra nisl eget tempus. Nam
  bibendum purus et sapien condimentum fringilla ut fringilla velit. Aliquam
  ipsum ipsum, efficitur eget mattis ac, fringilla eget justo. Proin in diam
  turpis.
</PostParagraph>
<PostParagraph
  >Praesent dignissim dictum sapien dignissim imperdiet. Vivamus rutrum nunc non
  eros faucibus, bibendum luctus elit scelerisque. Nam consequat mollis
  sagittis. Maecenas posuere fringilla hendrerit. Cras lectus massa, tempor id
  luctus ut, placerat et libero. Fusce vestibulum velit justo, nec molestie
  lacus varius auctor. Curabitur eget metus a ipsum consequat rhoncus non vel
  justo. Donec efficitur malesuada ligula, vel suscipit ligula varius sed. In
  quis augue eget dolor ultrices euismod id nec enim. Duis placerat nunc ac
  suscipit hendrerit. Duis ornare, nisi in vehicula placerat, nisl ligula
  lobortis massa, eget egestas arcu purus elementum diam. Quisque egestas odio
  quis gravida pretium. Nunc auctor, metus in condimentum ullamcorper, leo ipsum
  posuere est, vitae molestie arcu risus ac est. Fusce blandit at arcu ut
  faucibus.</PostParagraph
>
<PostParagraph
  >Donec vel lacus sed enim euismod pellentesque vitae sed mauris. Cras maximus
  semper congue. Aenean rhoncus aliquet dui et rhoncus. Nunc ornare congue nisl
  non auctor. In est nisi, commodo non porta eu, volutpat in metus. Nullam at
  ligula sed ante elementum molestie. Etiam id posuere quam, eget laoreet urna.
  Duis enim est, auctor iaculis hendrerit sed, rutrum vitae nunc. Pellentesque
  eget blandit lectus. Phasellus sed lorem ullamcorper, vulputate enim id,
  dignissim ligula.</PostParagraph
>
<PostSection fragment="suspendisse-potenti">Suspendisse potenti</PostSection>
<PostParagraph
  >Ut fermentum aliquam gravida. Orci varius natoque penatibus et magnis dis
  parturient montes, nascetur ridiculus mus. Nunc vel sem eget odio posuere
  efficitur. Phasellus ut lorem porta, eleifend metus quis, interdum risus.
  Morbi rhoncus leo eu dolor interdum sodales. Aliquam volutpat in ante a
  elementum. Nulla ac nibh tempus mi suscipit consectetur. Suspendisse potenti.
  Proin pellentesque, nunc eget luctus hendrerit, orci nunc efficitur turpis, eu
  condimentum sem sapien ut neque.</PostParagraph
>
<PostParagraph
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus
  sagittis fringilla. Cras hendrerit ante at metus dapibus, id malesuada sem
  laoreet. Suspendisse sollicitudin purus a diam placerat, vel lacinia lectus
  tincidunt. Sed tempus commodo turpis, id eleifend nibh. Quisque ac odio ut
  eros dignissim interdum in sit amet lectus. Nulla fermentum ante ullamcorper
  purus ultrices aliquam. Ut accumsan mauris in tortor condimentum, non suscipit
  nibh commodo. Sed ac ex non nulla consequat ullamcorper. Vivamus ut massa
  tellus. Fusce eget nibh libero. Fusce condimentum vehicula ornare. Nunc ac
  dolor nec magna laoreet iaculis. Duis quis vestibulum ante. Etiam in posuere
  sem.</PostParagraph
>
<PostParagraph
  >Praesent dignissim dictum sapien dignissim imperdiet. Vivamus rutrum nunc non
  eros faucibus, bibendum luctus elit scelerisque. Nam consequat mollis
  sagittis. Maecenas posuere fringilla hendrerit. Cras lectus massa, tempor id
  luctus ut, placerat et libero. Fusce vestibulum velit justo, nec molestie
  lacus varius auctor. Curabitur eget metus a ipsum consequat rhoncus non vel
  justo. Donec efficitur malesuada ligula, vel suscipit ligula varius sed. In
  quis augue eget dolor ultrices euismod id nec enim. Duis placerat nunc ac
  suscipit hendrerit. Duis ornare, nisi in vehicula placerat, nisl ligula
  lobortis massa, eget egestas arcu purus elementum diam. Quisque egestas odio
  quis gravida pretium. Nunc auctor, metus in condimentum ullamcorper, leo ipsum
  posuere est, vitae molestie arcu risus ac est. Fusce blandit at arcu ut
  faucibus.</PostParagraph
>
<PostSection fragment="pellentesque">Pellentesque</PostSection>
<PostImage
  source="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
  alternative="cat"
  reference="fig:cat1"
  caption="This is a cat"
/>
<PostParagraph
  >In hac habitasse platea dictumst. Pellentesque dignissim nunc at eleifend
  tincidunt. Maecenas a sapien bibendum, facilisis mauris id, hendrerit risus.
  Aenean nec interdum arcu. Pellentesque lectus dui, suscipit ut elit ac,
  iaculis ultricies massa. Nam scelerisque molestie odio vitae ultricies. Nulla
  hendrerit felis at eros semper, ut consectetur mi consectetur. Suspendisse in
  risus ex. Cras sit amet aliquam urna. Cras tempus sapien eget diam dictum, in
  suscipit eros scelerisque. Duis aliquet pharetra nisl eget tempus. Nam
  bibendum purus et sapien condimentum fringilla ut fringilla velit. Aliquam
  ipsum ipsum, efficitur eget mattis ac, fringilla eget justo. Proin in diam
  turpis.
</PostParagraph>
<PostImage
  source="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
  alternative="cat"
  reference="fig:cat2"
  caption="This is a cat"
/>
<PostParagraph
  >Ut fermentum aliquam gravida. Orci varius natoque penatibus et magnis dis
  parturient montes, nascetur ridiculus mus. Nunc vel sem eget odio posuere
  efficitur. Phasellus ut lorem porta, eleifend metus quis, interdum risus.
  Morbi rhoncus leo eu dolor interdum sodales. Aliquam volutpat in ante a
  elementum. Nulla ac nibh tempus mi suscipit consectetur. Suspendisse potenti.
  Proin pellentesque, nunc eget luctus hendrerit, orci nunc efficitur turpis, eu
  condimentum sem sapien ut neque.</PostParagraph
>
<PostImage
  source="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
  alternative="cat"
  reference="fig:cat3"
  caption="This is a cat"
/>
<div class="flex flex-col mt-6">
  <a href="#top" class="flex flex-col mx-auto">
    <div class="text-primary-800 mx-auto">
      <AngleUpSolid />
      <AngleUpSolid class="-mt-3" />
      <AngleUpSolid class="-mt-3" />
    </div>
    <div class="text-center text-xs mt-1 text-primary-700">To the top</div>
  </a>
</div>
