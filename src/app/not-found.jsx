"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Thay đổi từ next/router sang next/navigation
import "../styles/not_found.scss";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(redirectTimer); // Cleanup function để tránh memory leak
  }, []); // Thêm dependency array trống để useEffect chỉ chạy một lần

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Hình như bạn bị lạc phải không?</h3>
                <p>trang bạn đang tìm kiếm không có sẵn!</p>
                <Link href="/" className="link_404">
                  Trở về trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
