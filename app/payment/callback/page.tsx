"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { useFetch } from "../../useFetch";

export const dynamic = "force-dynamic";


export default function PaymentCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { post, get } = useFetch();
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");

      if (!reference) {
        toast.error("Invalid payment reference");
        router.push("/registration");
        return;
      }

      try {
        // Verify payment with your backend
        const verificationResponse = await get(
          `https://platview-backend.onrender.com/api/payment/verify/${reference}`
        );

        if (
          verificationResponse.success &&
          verificationResponse.data.status === "success"
        ) {
          toast.success("Payment successful!");
          router.push("/payment/success"); // Redirect to success page
        } else {
          toast.error("Payment failed or was cancelled");
          router.push("/payment/failed");
        }
      } catch (error) {
        toast.error("Payment verification failed");
        router.push("/payment/failed");
      } finally {
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [searchParams, router, post]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {verifying ? (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0022D4] mx-auto mb-4"></div>
            <p className="text-lg font-semibold">Verifying your payment...</p>
          </>
        ) : (
          <p>Redirecting...</p>
        )}
      </div>
    </div>
  );
}
